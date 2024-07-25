import { Box, Stack } from '@chakra-ui/react';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';

export type CreateExchangeFormProps = {
  onSuccess: () => void;
};

export const CreateExchangeForm = ({
  onSuccess,
}: CreateExchangeFormProps) => {
  const onSubmit = async () => {
    onSuccess();
  };

  return (
    <Box w="full">
      <Stack
        as="form"
        onSubmit={() => onSubmit()}
        w="full"
        spacing="8"
      >
        <InputField label="Number" />
        <InputField label="From" />
        <InputField label="To" />

        <InputField type="textarea" label="Info" />

        <Button
          isDisabled={false}
          isLoading={false}
          type="submit"
        >
          Create
        </Button>
      </Stack>
    </Box>
  );
};
