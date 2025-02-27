<h1 align="center">
  Image Description Generator
</h1>

<div align="center">
  Generate alt description tag for an image on the fly using OpenAI
  <br />
</div>

<div align="center">
<br />

[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/eyevinn/img-alt-gen/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
[![made with hearth by Eyevinn](https://img.shields.io/badge/made%20with%20%E2%99%A5%20by-Eyevinn-59cbe8.svg?style=flat-square)](https://github.com/eyevinn)
[![Slack](http://slack.streamingtech.se/badge.svg)](http://slack.streamingtech.se)

</div>

Generate `alt` description tag for an image to improve accessability. Uses OpenAI LLM for describing the image.

## Requirements

 - Open AI account and API key

## Installation / Usage

```bash
% npm install
```

```
% OPENAI_API_KEY=<your-api-key> npm start
```

API documentation available at `http://localhost:8000/docs`.

Output in HTML

```bash
% curl "http://localhost:8000/image/alt?url=https%3A%2F%2Fblog.osaas.io%2Fwp-content%2Fuploads%2F2025%2F02%2Fimage-1536x851.png"
<img src="https://blog.osaas.io/wp-content/uploads/2025/02/image-1536x851.png" alt="The image presents an HLS monitoring dashboard displaying active stream statuses, uptime, error counts, and current issues." />
```

Output in plain text

```bash
% curl "http://localhost:8000/image/alt?url=https%3A%2F%2Fblog.osaas.io%2Fwp-content%2Fuploads%2F2025%2F02%2Fimage-1536x851.png&format=text"
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md)

## License

This project is licensed under the MIT License, see [LICENSE](LICENSE).

# Support

Join our [community on Slack](http://slack.streamingtech.se) where you can post any questions regarding any of our open source projects. Eyevinn's consulting business can also offer you:

- Further development of this component
- Customization and integration of this component into your platform
- Support and maintenance agreement

Contact [sales@eyevinn.se](mailto:sales@eyevinn.se) if you are interested.

# About Eyevinn Technology

[Eyevinn Technology](https://www.eyevinntechnology.se) is an independent consultant firm specialized in video and streaming. Independent in a way that we are not commercially tied to any platform or technology vendor. As our way to innovate and push the industry forward we develop proof-of-concepts and tools. The things we learn and the code we write we share with the industry in [blogs](https://dev.to/video) and by open sourcing the code we have written.

Want to know more about Eyevinn and how it is to work here. Contact us at work@eyevinn.se!
