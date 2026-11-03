export const resizeStart = {
  eyebrow: "YOUR NEXT STEP",
  title: "Choose it. Size it. Save it.",
  steps: [
    { icon: "image", text: "Choose an image to see a local preview." },
    { icon: "sliders", text: "Set the width and height before uploading." },
    {
      icon: "resize",
      text: "Select Resize image to upload and create your result.",
    },
  ],
  note: "Choosing a file does not upload it. Your original is saved in cloud storage when you start resizing.",
} as const;
