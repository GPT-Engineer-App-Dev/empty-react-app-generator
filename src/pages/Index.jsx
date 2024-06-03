import { Container, Text, VStack, Box } from "@chakra-ui/react";
import { useDishes, useAddDish, useUpdateDish, useDeleteDish } from '../integrations/supabase';

const Index = () => {
  const { data: dishes, error, isLoading } = useDishes();
  const addDish = useAddDish();
  const updateDish = useUpdateDish();
  const deleteDish = useDeleteDish();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {dishes.map(dish => (
          <Box key={dish.id} p={4} borderWidth={1} borderRadius="md">
            <Text>Name: {dish.name}</Text>
            <Text>Country: {dish.country}</Text>
            <Text>Size: {dish.size}</Text>
            <Text>Type: {dish.type}</Text>
            <Text>Price: {dish.price}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;