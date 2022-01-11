import Button from "../src/Components/Atoms/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Click Me",
  size: "md",
};

export const Blue = Template.bind({});
Blue.args = {
  backgroundColor: "blue",
  label: "Click Me",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Click Me",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Click Me",
  size: "lg",
};
