import { Box, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';

import { useCreateExchange } from '../../api/create-exchange';
import { CreateExchangeData } from '../../types';

export type CreateExchangeFormProps = {
  onSuccess: () => void;
};

export const CreateExchangeForm = ({
  onSuccess,
}: CreateExchangeFormProps) => {
  const createExchange = useCreateExchange({ onSuccess });

  const { register, handleSubmit, formState } =
    useForm<CreateExchangeData>();

  const onSubmit = (data: CreateExchangeData) => {
    createExchange.submit({ data });
  };

  return (
    <Box w="full">
      <Stack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="full"
        spacing="8"
      >
        <InputField
          label="Number"
          {...register('number', {
            required: 'Required',
          })}
          error={formState.errors['number']}
        />
        <InputField
          label="LocationTo"
          {...register('locationTo', {
            required: 'Required',
          })}
          error={formState.errors['locationTo']}
        />
        <InputField
          label="locationFrom"
          {...register('locationFrom', {
            required: 'Required',
          })}
          error={formState.errors['locationFrom']}
        />

        <Button
          isDisabled={createExchange.isLoading}
          isLoading={createExchange.isLoading}
          type="submit"
        >
          Create
        </Button>
      </Stack>
    </Box>
  );
};
