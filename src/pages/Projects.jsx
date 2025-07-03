// src/App.js
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
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
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, EmailIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { FaProjectDiagram } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fleco_app_login_2 from "../assets/img/fleco_app_login_2.jpg";
import fleco_app_submit from "../assets/img/fleco_app_submit.jpg";
import fleco_app_complaints from "../assets/img/fleco_app_complaints.jpg";
import fleco_app_track from "../assets/img/fleco_app_track.jpg";
import fleco_app_power_outages from "../assets/img/fleco_app_power_outages.jpg";
import fleco_app_others from "../assets/img/fleco_app_others.jpg";
import resume_builder from "../assets/img/resume-builder.png";
import cart from "../assets/img/cart.jpg";
import checkout from "../assets/img/checkout.png";
import Orders from "../assets/img/Orders.png";
import product_info from "../assets/img/product_info.jpg";
import dashboard from "../assets/img/dashboard.png";
import manage_voting from "../assets/img/manage_voting.png";

import voting_history from "../assets/img/voting_history.png";
import user_login from "../assets/img/user-login.png";
import user_dashboard from "../assets/img/user-dashboard.png";
import user_vote from "../assets/img/user-vote.png";

import { useNavigate } from "react-router-dom";
function Project() {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/");
  };
  const sliderSettings = {
    dots: true, // Set to true if you want navigation dots
    infinite: true,
    centerMode: true, // Enables the "notebook" effect
    centerPadding: "0", // Ensures images are tightly aligned
    slidesToShow: 2, // Show 3 images at a time
    speed: 500,
    focusOnSelect: true, // Allows clicking on side images to focus them
  };

  const sliderSettings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const flecoAppImages = [
    fleco_app_login_2,
    fleco_app_submit,
    fleco_app_complaints,
    fleco_app_track,
    fleco_app_power_outages,
    fleco_app_others,
  ];
  const erpImages = [cart, checkout, Orders, product_info];
  const soccsImages = [
    dashboard,
    manage_voting,
    voting_history,
    user_login,
    user_dashboard,
    user_vote,
  ];
  const projectImages = [
    "https://via.placeholder.com/400x200?text=Screenshot+2",
    "https://via.placeholder.com/400x200?text=Screenshot+3",
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (src) => {
    setSelectedImage(src);
    onOpen();
  };
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      overflowX={"hidden"}
      bg={useColorModeValue("white", "#000000")}
    >
      <Container
        mb={2}
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

        <SimpleGrid mt={5} columns={{ base: 1, md: 2 }} spacing={5}>
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
              {flecoAppImages.map((src, index) => (
                <Box key={index} px={2}>
                  {" "}
                  {/* Add spacing between items */}
                  <Image
                    src={src}
                    alt={`Project Screenshot ${index + 1}`}
                    borderRadius="md"
                    objectFit="cover"
                    height={{ base: "200px", md: "300px", lg: "400px" }}
                  />
                </Box>
              ))}
            </Slider>
            <Wrap mt={8}>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="md">
                  React Native
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="full">
                  Flask
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="full">
                  Bootstrap
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="full">
                  Tailwind
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="full">
                  Appwrite
                </Badge>
              </WrapItem>
            </Wrap>
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

            <Box>
              <Image
                src={resume_builder}
                borderRadius="md"
                objectFit="contain"
                width="100%"
                height={{ base: "200px", md: "300px", lg: "400px" }} // Responsive height
              />
            </Box>

            <Wrap mt={8}>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="md">
                  React
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="full">
                  Chakra UI
                </Badge>
              </WrapItem>
            </Wrap>
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
            <Slider {...sliderSettings1}>
              {erpImages.map((src, index) => (
                <Box key={index}>
                  <Image
                    src={src}
                    alt={`Project Screenshot ${index + 1}`}
                    borderRadius="md"
                    objectFit="contain"
                    width="100%"
                    height={{ base: "200px", md: "300px", lg: "400px" }} // Responsive height
                  />
                </Box>
              ))}
            </Slider>
            <Wrap mt={8}>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="md">
                  Python
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="full">
                  Flask
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="full">
                  SQLite
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="full">
                  Bootstrap
                </Badge>
              </WrapItem>
            </Wrap>
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
              <Text fontWeight="bold">SOCCS Online Voting System</Text>
            </HStack>

            {/* Description */}
            <Text mb={4} fontSize="sm">
              SOCCS Online Voting System
            </Text>

            {/* Carousel */}
            <Slider {...sliderSettings1}>
              {soccsImages.map((src, index) => (
                <Box key={index}>
                  <Image
                    src={src}
                    alt={`Project Screenshot ${index + 1}`}
                    borderRadius="md"
                    objectFit="contain"
                    width="100%"
                    height={{ base: "200px", md: "300px", lg: "400px" }} // Responsive height
                  />
                </Box>
              ))}
            </Slider>
            <Wrap mt={8} spacing={4}>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="md">
                  JavaScript
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="full">
                  Bootstrap
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge fontSize="0.7em" borderRadius="full">
                  Appwrite
                </Badge>
              </WrapItem>
            </Wrap>
          </Box>
        </SimpleGrid>
        {/* Modal for Image Preview */}
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent bg="transparent" boxShadow="none">
            <ModalBody p={0}>
              <Image
                src={selectedImage}
                alt="Preview"
                borderRadius="md"
                objectFit="contain"
                width="100%"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}
export default Project;
