import OpenAI from 'openai';

export class ImageGenerator {
  private openAi: OpenAI;

  constructor(private openAiApiKey: string) {
    this.openAi = new OpenAI({ apiKey: openAiApiKey });
  }

  async generateAltDescription(url: string): Promise<string> {
    const response = await this.openAi.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Describe what this image is about for a person that is blind in maximum 140 characters.`
            },
            {
              type: 'image_url',
              image_url: { url }
            }
          ]
        }
      ],
      store: true
    });
    if (response) {
      if (response && response.choices && response.choices.length > 0) {
        if (response.choices[0].message.content) {
          return response.choices[0].message.content;
        }
      }
    }
    throw new Error('No response from OpenAI');
  }
}
