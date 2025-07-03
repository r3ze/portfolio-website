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
  useClipboard,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, EmailIcon, DownloadIcon } from "@chakra-ui/icons";
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
  FaTwitter,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import danzel from "./assets/img/danzel.jpg";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const email = "danzelfernandez0@gmail.com";
  const steps = [
    {
      title: "Bachelor of Science in Information Technology",
      institution: "Laguna State Polytechnic University - 2021 to Present",
      description: "Specialized in web and mobile development.",
    },
    {
      title: "Information and Communication Technology (ICT)",
      institution: "AVM Foundation - 2019 to 2021",
      description:
        "Gained hands-on experience in full-stack development and agile practices.",
    },
    {
      title: "High School Diploma",
      institution: "Pagsanjan Integrated National High School - 2016 to 2019",
      description:
        "Developed a strong foundation in critical thinking, communication, and teamwork through a variety of academic subjects and extracurricular activities.",
    },

    // Add more steps as needed
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const navigate = useNavigate();
  const redirectToProject = () => {
    navigate("/project");
  };
  //Download CV function
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Danzel_Fernandez_CV.pdf";
    link.download = "Danzel_Fernandez_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      overflowX={"hidden"}
      bg={useColorModeValue("white", "#000000")}
    >
      <Container
        data-aos="fade-up"
        fontFamily="body"
        mt={5}
        maxW="container.lg"
      >
        <Box w="100%" display="flex" justifyContent="space-between" p={5}>
          <HStack spacing={5} p={5}>
            <Box boxSize="150px">
              <Image
                borderRadius="lg"
                name="Danzel Fernandez"
                src={danzel}
                alt="Danzel Fernandez"
              />
            </Box>
            <Box>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color={useColorModeValue("gray.800", "gray.100")}
              >
                Danzel Fernandez
              </Text>

              {/* Location */}
              <HStack
                spacing={1}
                alignItems="center"
                color={useColorModeValue("gray.600", "gray.400")}
                mt={1}
              >
                <HiOutlineLocationMarker size="1.25em" />
                <Text fontSize="md">Laguna, Philippines</Text>
              </HStack>

              {/* Job Title */}
              <Text
                mt={2}
                fontSize="md"
                color={useColorModeValue("gray.700", "gray.300")}
              >
                SOFTWARE DEVELOPER
              </Text>
              <Button
                size="sm"
                mt="3"
                leftIcon={<DownloadIcon />}
                variant="solid"
                bg="black"
                color="white"
                onClick={downloadCV}
                _hover={{ bg: "gray.800" }} // Optional hover effect
              >
                Download CV
              </Button>
            </Box>
          </HStack>

          <Box>
            <HStack>
              <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                size="md"
              />
            </HStack>
          </Box>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} py={2} px={5}>
          {/* About Section */}
          <Box>
            <Box
              maxH="fit-content"
              p={6}
              border="1px"
              borderRadius="md"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              bg={useColorModeValue("white", "#111111")}
            >
              <Text fontSize="xl" fontWeight="bold" mb={3}>
                About
              </Text>
              <Text
                fontSize="sm"
                color={useColorModeValue("gray.700", "gray.200")}
                lineHeight="tall"
              >
                Highly motivated and detail-oriented individual with a strong
                foundation in software development, system administration, and
                database management. Proficient in programming languages such as
                Python, JavaScript, and C#, with hands-on experience in
                developing web and mobile applications through academic
                projects.
              </Text>
            </Box>

            <Box
              mt={2}
              maxH="fit-content"
              p={6}
              border="1px"
              borderRadius="md"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              bg={useColorModeValue("white", "#111111")}
            >
              <Text fontSize="xl" fontWeight="bold" mb={3}>
                Tech Stack
              </Text>
              <Wrap>
                <WrapItem>
                  {" "}
                  <Tag size="sm">JAVA</Tag>
                </WrapItem>
                <WrapItem>
                  {" "}
                  <Tag size="sm">C#</Tag>
                </WrapItem>
                <WrapItem>
                  {" "}
                  <Tag size="sm">HTML</Tag>
                </WrapItem>

                <WrapItem>
                  <Tag size="sm">CSS</Tag>
                </WrapItem>
                <WrapItem>
                  <Tag size="sm">JavaScript</Tag>
                </WrapItem>
                <WrapItem>
                  <Tag size="sm">Bootstrap</Tag>
                </WrapItem>
                <WrapItem>
                  <Tag size="sm">Tailwind</Tag>
                </WrapItem>
                <WrapItem>
                  <Tag size="sm">Chakra UI</Tag>
                </WrapItem>
                <WrapItem>
                  {" "}
                  <Tag size="sm">React</Tag>
                </WrapItem>
                <WrapItem>
                  {" "}
                  <Tag size="sm">Flask</Tag>
                </WrapItem>
                <WrapItem>
                  {" "}
                  <Tag size="sm">MySql</Tag>
                </WrapItem>
                <WrapItem>
                  {" "}
                  <Tag size="sm">Appwrite</Tag>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
          {/* Education Section */}
          <Box
            height="fit-content"
            p={6}
            border="1px"
            borderRadius="md"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            bg={useColorModeValue("white", "#111111")}
          >
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Education
            </Text>

            <Stepper
              size="xs"
              colorScheme="gray"
              orientation="vertical"
              gap="0"
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator
                    bg={
                      index === 0
                        ? useColorModeValue("black", "white") // Distinct color for the top step
                        : useColorModeValue("white", "gray.600") // Subtle background for others
                    }
                    borderColor={useColorModeValue("gray", "gray.300")}
                  />
                  <VStack align="start" spacing={1} ml={4}>
                    <Text fontSize="md" fontWeight="semibold">
                      {step.title}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {step.institution}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {step.description}
                    </Text>
                  </VStack>
                  <StepSeparator borderColor="gray.300" />
                </Step>
              ))}
            </Stepper>
          </Box>
        </SimpleGrid>

        <Box px={5}>
          <Grid templateColumns={{ base: "1fr", md: "55% 45%" }} gap={2}>
            <GridItem>
              <Box
                maxH="fit-content"
                p={6}
                border="1px"
                borderRadius="md"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                bg={useColorModeValue("white", "#111111")}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    mb={3}
                    color={useColorModeValue("gray.800", "whiteAlpha.900")}
                  >
                    Recent Projects
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color="blue.500"
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                    transition="all 0.2s"
                    onClick={redirectToProject}
                  >
                    View All
                  </Text>
                </Box>

                {/* Project List */}
                <Box mt={4}>
                  {[
                    {
                      title: "Consumer Complaint Submission App",
                      description:
                        "Enables consumers to report issues, such as power outages, directly to the electric company.",
                      techStack: [
                        "React Native",
                        "Appwrite",
                        "Flask",
                        "Bootstrap",
                      ],
                    },
                    {
                      title: "Resume Builder Website",
                      description:
                        "An online tool for creating and customizing professional resumes.",
                      techStack: ["React", "Node.js", "MongoDB", "Material-UI"],
                    },
                    {
                      title: "ERP System",
                      description:
                        "Enterprise resource planning system for streamlining business operations.",
                      techStack: ["Flask", "SQlite", "Bootstrap"],
                    },
                  ].map((project, index) => (
                    <Box
                      key={index}
                      mb={3}
                      p={4}
                      borderRadius="lg"
                      borderWidth="1px"
                      borderColor={useColorModeValue("gray.300", "gray.600")}
                      _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
                      transition="all 0.2s ease-in-out"
                      bg={useColorModeValue("white", "gray.800")}
                    >
                      <HStack spacing={4} align="start">
                        <Icon
                          as={FaProjectDiagram}
                          color="blue.400"
                          boxSize={5}
                        />
                        <Box flex="1">
                          <Text
                            fontWeight="semibold"
                            fontSize="lg"
                            color={useColorModeValue(
                              "gray.800",
                              "whiteAlpha.900"
                            )}
                          >
                            {project.title}
                          </Text>
                          <Text
                            fontSize="sm"
                            color={useColorModeValue("gray.600", "gray.400")}
                            mt={1}
                          >
                            {project.description}
                          </Text>
                          <HStack spacing={2} mt={2} wrap="wrap">
                            {project.techStack.map((tech, idx) => (
                              <Badge
                                key={idx}
                                fontSize="0.7em"
                                borderRadius="full"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </HStack>
                        </Box>
                      </HStack>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box
                mt={2}
                maxH="fit-content"
                p={6}
                border="1px"
                borderRadius="md"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                bg={useColorModeValue("white", "#111111")}
                transition="all 0.3s ease-in-out"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    mb={3}
                    color={useColorModeValue("gray.800", "whiteAlpha.900")}
                  >
                    Recent Blog Posts
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color="blue.500"
                    cursor="pointer"
                    _hover={{
                      textDecoration: "underline",
                      color: "blue.400",
                    }}
                    transition="all 0.2s ease-in-out"
                    as="a"
                    href={"https://medium.com/@danzelfernandez0"}
                    target="_blank"
                  >
                    View All
                  </Text>
                </Box>

                {/* Blog Post List */}
                <Box mt={4}>
                  {[
                    {
                      title:
                        "Embracing Lifelong Learning: The Key to Thriving in Tech",
                      description:
                        "A deep dive into the importance of continuous learning in the tech industry and how it empowers professionals to adapt and grow.",
                      link: "https://medium.com/@danzelfernandez0/embracing-lifelong-learning-the-key-to-thriving-in-tech-9d70b9e8cab7",
                      date: "November 2024",
                    },
                    {
                      title: "Life is More Than Just a Single Thread",
                      description:
                        "An introspective exploration of how balance and variety enrich our lives, reminding us to look beyond singular pursuits and embrace the full spectrum of experiences.",
                      link: "https://medium.com/@danzelfernandez0/life-is-more-than-just-a-single-thread-03e6e6fe5b54",
                      date: "November 2024",
                    },
                  ].map((blog, index) => (
                    <Box
                      key={index}
                      mb={4}
                      p={5}
                      borderRadius="lg"
                      borderWidth="1px"
                      borderColor={useColorModeValue("gray.300", "gray.600")}
                      _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
                      transition="all 0.3s ease-in-out"
                      bg={useColorModeValue("white", "gray.800")}
                    >
                      <VStack align="start" spacing={2}>
                        <Text
                          fontSize="xl"
                          fontWeight="semibold"
                          color={useColorModeValue(
                            "gray.800",
                            "whiteAlpha.900"
                          )}
                          _hover={{
                            textDecoration: "underline",
                            color: "blue.400",
                          }}
                          cursor="pointer"
                          as="a"
                          href={blog.link}
                          target="_blank"
                        >
                          {blog.title}
                        </Text>
                        <Text
                          fontSize="sm"
                          color={useColorModeValue("gray.600", "gray.400")}
                        >
                          {blog.description}
                        </Text>
                        <Text
                          fontSize="xs"
                          color={useColorModeValue("gray.500", "gray.300")}
                        >
                          Published on {blog.date}
                        </Text>
                      </VStack>
                    </Box>
                  ))}
                </Box>
              </Box>
            </GridItem>

            <GridItem>
              <Box
                maxH="fit-content"
                p={6}
                border="1px"
                borderRadius="md"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                bg={useColorModeValue("white", "#111111")}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    mb={3}
                    color={useColorModeValue("gray.800", "whiteAlpha.900")}
                  >
                    Connect
                  </Text>
                </Box>

                {/* Certification List */}
                <Box
                  mt={4}
                  mb={3}
                  p={6}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={useColorModeValue("gray.300", "gray.600")}
                  bg={useColorModeValue("white", "gray.800")}
                  transition="all 0.3s ease-in-out"
                >
                  <VStack spacing={6} align="start">
                    {/* Title */}
                    <Text
                      fontWeight="bold"
                      fontSize="xl"
                      color={useColorModeValue("gray.800", "whiteAlpha.900")}
                    >
                      Let’s Connect!
                    </Text>

                    {/* Freelance Work Note */}
                    <Text
                      fontSize="md"
                      color={useColorModeValue("gray.600", "gray.400")}
                      lineHeight="1.6"
                    >
                      I’m open to freelance work! Feel free to connect with me
                      via my social media or email me directly. Let’s build
                      something amazing together!
                    </Text>

                    {/* Social Media Links */}
                    <HStack spacing={6}>
                      <Tooltip label="GitHub" placement="top">
                        <Link href="https://github.com/r3ze" isExternal>
                          <Icon
                            as={FaGithub}
                            boxSize={7}
                            color={useColorModeValue(
                              "gray.700",
                              "whiteAlpha.900"
                            )}
                          />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Facebook" placement="top">
                        <Link
                          href="https://www.facebook.com/azlshr/"
                          isExternal
                        >
                          <Icon as={FaFacebook} boxSize={7} color="cyan.400" />
                        </Link>
                      </Tooltip>
                    </HStack>

                    {/* Divider */}
                    <Divider
                      borderColor={useColorModeValue("gray.300", "gray.600")}
                    />

                    {/* Email Section */}
                    <HStack spacing={4} w="full">
                      <Icon as={FaEnvelope} boxSize={6} color="red.500" />
                      <VStack align="start" spacing={0} flex="1">
                        <Text
                          fontSize="md"
                          color={useColorModeValue(
                            "gray.800",
                            "whiteAlpha.900"
                          )}
                          fontWeight="semibold"
                        >
                          {email}
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </Box>

              <Box
                mt={2}
                maxH="fit-content"
                p={6}
                border="1px"
                borderRadius="md"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                bg={useColorModeValue("white", "#111111")}
              >
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb={3}
                  color={useColorModeValue("gray.800", "whiteAlpha.900")}
                >
                  Hobbies and Interests
                </Text>

                {/* Hobby List */}
                <Box mt={4}>
                  {[
                    { title: "Reading Novels", icon: FaBook },
                    { title: "Weight Lifting", icon: FaDumbbell },
                    {
                      title: "Japanese Language & Culture",
                      icon: FaGlobeAsia,
                    },
                    { title: "Music", icon: FaMusic },

                    { title: "Learning Tech", icon: FaLaptopCode },
                  ].map((hobby, index) => (
                    <Box
                      key={index}
                      mb={3}
                      p={4}
                      borderRadius="lg"
                      borderWidth="1px"
                      borderColor={useColorModeValue("gray.300", "gray.600")}
                      display="flex"
                      alignItems="center"
                      transition="all 0.2s ease-in-out"
                      bg={useColorModeValue("white", "gray.800")}
                      _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
                    >
                      <Icon
                        as={hobby.icon}
                        color="blue.400"
                        boxSize={5}
                        mr={3}
                      />
                      <Text
                        fontWeight="semibold"
                        fontSize="md"
                        color={useColorModeValue("gray.800", "whiteAlpha.900")}
                      >
                        {hobby.title}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
