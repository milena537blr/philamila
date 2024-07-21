import { DeleteIcon } from '@chakra-ui/icons';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (props) => (
  <Button {...props} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Click Me',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  children: 'Delete',
  icon: <DeleteIcon />,
};

export const Loading = Template.bind({});

Loading.args = {
  children: 'Submit',
  isLoading: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Submit',
  isDisabled: true,
};
