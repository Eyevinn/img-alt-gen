import { Type } from '@sinclair/typebox';
import { FastifyPluginCallback } from 'fastify';
import { ImageGenerator } from './image_generator';

interface ImageApiOptions {
  openAiApiKey: string;
}

const apiImage: FastifyPluginCallback<ImageApiOptions> = (
  fastify,
  opts,
  next
) => {
  const imageGenerator = new ImageGenerator(opts.openAiApiKey);

  fastify.get<{
    Querystring: { url: string; format: string };
    Reply: string | { message: string };
  }>(
    '/image/alt',
    {
      schema: {
        description: 'Generate an alt description for an image',
        querystring: {
          url: Type.String(),
          format: Type.String({ enum: ['text', 'html'] })
        },
        response: {
          200: Type.String(),
          400: Type.Object({ message: Type.String() }),
          500: Type.Object({ message: Type.String() })
        }
      }
    },
    async (request, reply) => {
      try {
        if (request.query.url === undefined) {
          reply.code(400).send({ message: 'url is required' });
        } else {
          const altDescription = await imageGenerator.generateAltDescription(
            request.query.url
          );
          if (request.query.format === 'text') {
            reply.code(200).send(altDescription);
          } else {
            reply
              .header('Content-Type', 'text/html')
              .code(200)
              .send(
                `<img src="${request.query.url}" alt="${altDescription}" />`
              );
          }
        }
      } catch (error) {
        reply.code(500).send({ message: (error as Error).message });
      }
    }
  );

  next();
};

export default apiImage;
