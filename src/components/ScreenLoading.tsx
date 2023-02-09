import { Heading, HStack, Spinner } from "native-base";
import * as React from "react";

export default function ScreenLoading() {
    return (
        <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
                Loading
            </Heading>
        </HStack>
    )
}