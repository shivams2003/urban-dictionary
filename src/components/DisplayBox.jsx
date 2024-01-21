import React from "react";
import { Heading, Stack ,Text} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import "./DisplayBox.css"
function DisplayBox(props) {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        marginBottom={4}
      >
        <Stack>
          <CardBody className="displayBox">
            <Heading size="md">{props.word}</Heading>
            <Text py="2">
              {props.text}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
}

export default DisplayBox;
