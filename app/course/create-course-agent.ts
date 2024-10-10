import { ChatCompletionCreateParams } from "openai/resources";

export const CREATE_COURSE_AGENT: ChatCompletionCreateParams = {
  // model: "llama3.2",
  model: "gpt-4o-mini",
  messages: [
    {
      role: "system",
      content: [
        {
          text: `You task is to create a course syllabus.`,
          type: "text",
        },
      ],
    },
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "I want to learn calculus",
        },
      ],
    },
  ],
  temperature: 1,
  max_tokens: 2048,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  tools: [
    {
      type: "function",
      function: {
        name: "create_syllabus",
        strict: true,
        parameters: {
          type: "object",
          required: ["prerequisites", "duration", "topics"],
          properties: {
            topics: {
              type: "array",
              items: {
                type: "object",
                required: ["name", "learningObjectives"],
                properties: {
                  name: {
                    type: "string",
                    description: "Name of the topic",
                  },
                  learningObjectives: {
                    type: "array",
                    items: {
                      type: "string",
                      description: "A learning objective related to the topic",
                    },
                    description:
                      "List of 5 to 10 learning objectives for the topic",
                  },
                },
                additionalProperties: false,
              },
              description: "Array of topics to be covered in the course",
            },
            duration: {
              type: "string",
              description:
                "Timeframe for completing the syllabus. For example, '12 weeks', '6 months', etc.",
            },
            prerequisites: {
              type: "array",
              items: {
                type: "string",
                description: "A prerequisite for the course",
              },
              description: "List of prerequisites for the course",
            },
          },
          additionalProperties: false,
        },
        description:
          "Creates a syllabus including prerequisites, duration, and required topics with learning objectives.",
      },
    },
  ],
  parallel_tool_calls: true,
  response_format: {
    type: "text",
  },
};
