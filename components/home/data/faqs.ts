export function getHomeFaqs(appName: string) {
  return [
    {
      question: "What can I do with " + appName + "?",
      answer:
        appName +
        " brings everyday image tasks into one toolbox: resizing, compression, cropping, conversion, background removal, watermarks, rotation and passport photo preparation. Each tool has its own purpose and availability label.",
    },
    {
      question: "Which tools can I use today?",
      answer:
        "Image upload and Resize image are connected today. Other editors are marked Coming next. You can explore their planned features from the tool cards, navigation toolbar or footer.",
    },
    {
      question:
        "What is the difference between an image editor and an image converter?",
      answer:
        "An editor changes the image itself, such as its dimensions, framing or orientation. A converter changes the file format. Choose a tool based on the change you need rather than the name of the source file.",
    },
    {
      question: "Which files can I upload?",
      answer:
        "The current uploader supports one JPG, PNG, WebP or AVIF image at a time, up to 10 MiB. Individual editors may also have processing limits, which are shown when you use the tool.",
    },
    {
      question: "Do my photos stay on my device?",
      answer:
        "Selecting a file creates a local preview. Starting a tool’s action, or selecting Upload image, sends the file to our server and saves it in cloud storage for processing. The current editing flow is not entirely local to your browser.",
    },
    {
      question: "Can I prepare digital and printable passport photos?",
      answer:
        "The planned passport photo editor includes separate digital and printable outputs for India and the United States. That editor is marked Coming next in the current frontend.",
    },
  ];
}
