// src/App.js
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Container,
  Center,
  FormControl,
  FormLabel,
  Input,
  Avatar,
  HStack,
  VStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  SimpleGrid,
  Divider,
  Circle,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Tag,
  Wrap,
  WrapItem,
  Icon,
  Badge,
  Grid,
  GridItem,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, EmailIcon, ArrowBackIcon } from "@chakra-ui/icons";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaInstagram,
  FaCertificate,
  FaProjectDiagram,
  FaStar,
  FaFilm,
  FaBook,
  FaDumbbell,
  FaGlobeAsia,
  FaMusic,
  FaLaptopCode,
  FaUser,
  FaGraduationCap,
  FaPenFancy,
  FaHeart,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate } from "react-router-dom";
function Certifications() {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/");
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const projectImages = [
    "https://via.placeholder.com/400x200?text=Screenshot+1",
    "https://via.placeholder.com/400x200?text=Screenshot+2",
    "https://via.placeholder.com/400x200?text=Screenshot+3",
  ];

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      overflowX={"hidden"}
      bg={useColorModeValue("white", "#000000")}
    >
      <Text>asd</Text>
      <Container
        data-aos="fade-up"
        fontFamily="body"
        mt={5}
        maxW="container.lg"
      >
        <Stack align="center" direction="row" spacing={4}>
          <Button
            onClick={redirectToHome}
            leftIcon={<ArrowBackIcon />}
            variant="ghost"
          >
            Back to Home
          </Button>
          <Text fontSize="3xl" fontWeight="bold">
            Projects
          </Text>
        </Stack>

        <SimpleGrid mt={5} columns={2} spacing={5}>
          <Box
            p={5}
            border="1px"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            borderRadius="md"
            boxShadow="sm"
          >
            {/* Header */}
            <HStack mb={4}>
              <Icon as={FaProjectDiagram} color="blue.400" boxSize={5} />
              <Text fontWeight="bold">Consumer Complaint Submission App</Text>
            </HStack>

            {/* Description */}
            <Text mb={4} fontSize="sm">
              Enables consumers to report issues, such as power outages,
              directly to the electric company.
            </Text>

            {/* Carousel */}
            <Slider {...sliderSettings}>
              {projectImages.map((src, index) => (
                <Box key={index}>
                  <Image
                    src={src}
                    alt={`Project Screenshot ${index + 1}`}
                    borderRadius="md"
                    objectFit="cover"
                    width="100%"
                  />
                </Box>
              ))}
            </Slider>
            <HStack mt={8}>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="md">
                React Native
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                Flask
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                Bootstrap
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                Tailwind
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                Appwrite
              </Badge>
            </HStack>
          </Box>
          <Box
            p={5}
            border="1px"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            borderRadius="md"
            boxShadow="sm"
          >
            {/* Header */}
            <HStack mb={4}>
              <Icon as={FaProjectDiagram} color="blue.400" boxSize={5} />
              <Text fontWeight="bold">Resume Builder Website</Text>
            </HStack>

            {/* Description */}
            <Text mb={4} fontSize="sm">
              An online tool for creating and customizing professional resumes.
            </Text>

            {/* Carousel */}
            <Slider {...sliderSettings}>
              {projectImages.map((src, index) => (
                <Box key={index}>
                  <Image
                    src={src}
                    alt={`Project Screenshot ${index + 1}`}
                    borderRadius="md"
                    objectFit="cover"
                    width="100%"
                  />
                </Box>
              ))}
            </Slider>
            <HStack mt={8}>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="md">
                React
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                Chakra UI
              </Badge>
            </HStack>
          </Box>

          <Box
            p={5}
            border="1px"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            borderRadius="md"
            boxShadow="sm"
          >
            {/* Header */}
            <HStack mb={4}>
              <Icon as={FaProjectDiagram} color="blue.400" boxSize={5} />
              <Text fontWeight="bold">ERP System</Text>
            </HStack>

            {/* Description */}
            <Text mb={4} fontSize="sm">
              Enterprise resource planning system for streamlining business
              operations.
            </Text>

            {/* Carousel */}
            <Slider {...sliderSettings}>
              {projectImages.map((src, index) => (
                <Box key={index}>
                  <Image
                    src={src}
                    alt={`Project Screenshot ${index + 1}`}
                    borderRadius="md"
                    objectFit="cover"
                    width="100%"
                  />
                </Box>
              ))}
            </Slider>
            <HStack mt={8}>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="md">
                Python
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                Flask
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                SQlite
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                Bootstrap
              </Badge>
            </HStack>
          </Box>

          <Box
            p={5}
            border="1px"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            borderRadius="md"
            boxShadow="sm"
          >
            {/* Header */}
            <HStack mb={4}>
              <Icon as={FaProjectDiagram} color="blue.400" boxSize={5} />
              <Text fontWeight="bold">TODO List Web App</Text>
            </HStack>

            {/* Description */}
            <Text mb={4} fontSize="sm">
              Online TODO List Web App
            </Text>

            {/* Carousel */}
            <Slider {...sliderSettings}>
              {projectImages.map((src, index) => (
                <Box key={index}>
                  <Image
                    src={src}
                    alt={`Project Screenshot ${index + 1}`}
                    borderRadius="md"
                    objectFit="cover"
                    width="100%"
                  />
                </Box>
              ))}
            </Slider>
            <HStack mt={8}>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="md">
                PHP
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                MySql
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                Bootstrap
              </Badge>
              <Badge colorScheme="teal" fontSize="0.7em" borderRadius="full">
                JavaScript
              </Badge>
            </HStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
export default Certifications;
