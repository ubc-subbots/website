//const constants = require("./js/constants");

const content = {
  projects: {
    project: {
      image: 'software.jpg',
      header: 'Featured Project - Propulsion System',
      body: "Here's a video outlining the features and design rationale behind our current robot's (Triton) propulsion system from each sub-team's perspective. This video was originally made for the RoboSub 2021 AUV Competiton.",
      software: {
        header: 'Software Projects',
        body:
          'With little pool access due to the COVID pandemic, ' +
          'we made the decision to shift our focus to developing our ' +
          'simulation environment. Simulation provides us with a cheaper and ' +
          'safer way to test our AUV, as well as ample synthetic data. To collect ' +
          'ample synthetic data for use in future design decisions, we decided to delevop ' +
          "two simulations. One to emulate what our robot's onboard cameras see and another to " +
          "simulate our robot's dynamics. You can learn more about each of these simulations below:",
        detail: [
          {
            header: 'Computer Vision',
            bodyFull:
              "<strong>Shown above:</strong> Our computer vision simulation in action. The program manges to distinguish our test image 'Lena' from the underwater surroundings.<br ><br >" +
              'One quirk about underwater images is that the farther away an object is, the greener it looks. ' +
              'Light behaves differently underwater than on land due to scattering and absorption, meaning if we want our camera simulation ' +
              'to look realistic, we need to model the behaviour of light. ' +
              'A key component of our simulation is underwater image synthesis, which takes an RGBD ' +
              'image (colour and depth) rendered in our simulation and generates an RGB image of an ' +
              'underwater scene. Our implementation models the physical properties ' +
              'of light, allowing us to simulate a variety of underwater environments by adjusting the ' +
              'attenuation coefficients over the visible spectrum of light (ten different water types are ' +
              'currently implemented). This ensures our synthetic data covers a range of different ' +
              'conditions which will help our models generalize to differences in water quality. We then ' +
              'used this simulation to render realistic underwater scenes. ' +
              '<br ><br >' +
              'After creating a realistic underwater environment, we trained a YOLO object detection model ' +
              "to recognize our common test image, 'Lena'. We generated a dataset of 800 underwater images with varying " +
              'scenery and placements of Lena. Even when Lena was only partially in frame or occluded by other objects, ' +
              'our program could still recognize her. In fact, after 2000 iterations on our 800 image dataset, our model ' +
              'achieved a mean average precision (mAP) score of 95%. ' +
              '<br ><br >' +
              'Once pool is access is readily available again, we plan on collecting in-water data for use as a validation ' +
              'dataset, as real-world performance will be the true test for our model.',

            carousel: {
              images: [
                '/images/projects/CameraSim1.png',
                '/images/projects/CameraSim2.png',
                '/images/projects/CameraSim3.png',
              ],
              captions: ['', '', ''],
            },
          },
          {
            header: 'Control System',
            bodyFull:
              '<strong>Shown above:</strong> A diagram displaying all the components of our control system. ' +
              '<br ><br > ' +
              'Having identified objects with computer vision, it is time for our AUV to move. ' +
              'However, in order to go to specific locations, we have to control our thrusters precisely, like a driver ' +
              'controlling the speed and direction of a car. This is achieved by our control system. ' +
              '<br ><br > ' +
              'First, we made a dynamics model for our vehicle. It describes the equations of motion, damping, as well as ' +
              'environmental wrench contributions for low-speed, submersible vehicles. ' +
              'This model not only provides us with an accurate representation ' +
              'of the AUV for us to more easily debug and tune our motion control system, but also gives us a means of ' +
              'calculating restoring forces in our chosen simulation environment, Gazebo. ' +
              '<br ><br > ' +
              'One constraint of our mathematical model is that it imposes no restrictions on the "pitch" axis  ' +
              'of motion (rotation about the <em>y</em> axis). However, by selecting a PD controller and a  ' +
              'Linear Quadratic Regulator to aid in controller tuning, we could address this constraint using a cost funtion ' +
              'which applies a moderate cost to each of our 5 degrees of freedom, and a large cost on the pitch motion. ' +
              '<br ><br > ' +
              'The controller implementation involves using a path planning algorithm to generate position setpoints and a  ' +
              'velocity profile for each step, then using a generic feedback model, perform PD control on the desired  ' +
              'setpoint using the gain values determined by the cost function.  ' +
              'Using the velocity profile and a thruster transformation matrix, we are able to calculate the force  ' +
              'contributions by each thruster to achieve the desired trajectory for each iteration of our control loop. ' +
              '<br ><br > ' +
              'To develop and validate our control system, we first created a Simulink project to test it under  ' +
              'theoretical conditions. Then, we moved on to using a simulation environment and a 3D rendering of our vehicle.  ' +
              'This approach allowed us to incrementally develop the system and decouple different stages of the design.  ' +
              '<br ><br > ' +
              'We chose the open-source simulation tool, Gazebo. It allows us to easily import STL models from SolidWorks, ' +
              'and apply mechanical properties like inertia and damping. Using Gazebo, we developed camera, position, gyroscope ' +
              'and depth sensor emulators, as well as thruster driver emulators. These emulators interact with our control pipeline ' +
              'via ROS2. In addition, we implemented buoyancy an hydrodynamic force plugins that calculate the environment forces ' +
              'acting on the AUV at any given time. ' +
              '<br ><br >' +
              'The benefit of using Simulink and Gazebo together is that Gazebo can seamlessly integrate with ROS2, ' +
              'as shown in the image above. we implemented the same equations in the Simulink project and in our ' +
              'real-time control loop and hydrodynamics plugin used by Gazebo. With the use of ROS topics, we are ' +
              'able to launch Gazebo alongside our autonomous control pipeline and communicate with the simulation ' +
              'environment exactly as we would communicate with physical hardware. ' +
              "This approach lets us visualize the vehicle's behaviour and gives us confidence to move on to physical testing.",
            carousel: {
              images: [
                '/images/projects/SubbotsGazeboSimulationEnvironment-ControlSystem.png',
              ],
              captions: [''],
            },
          },
        ],
      },
      electrical: {
        header: 'Electrical Projects',
        body:
          'The electrical team develops the electrical systems that allow the robot to read and respond to the world. ' +
          'The team designs systems to control and power thrusters, process signals, interface and communicate between sub-systems, ' +
          'and protect valuable electrical components from unexpected power surges. Robust and reliable electrical systems are critical ' +
          'for allowing a robot to react well to a dynamic environment. Here are some of the projects the electrical team is currently working on:',
        detail: [
          {
            header: 'Power Distribution',
            bodyFull:
              '<strong>Shown above:</strong> A diagram showing how our power distribution system is connected within and between enclosures. ' +
              '<br ><br >' +
              'Power distribution is a crucial system for the robot as it organizes and delivers the appropriate electrical power to ' +
              'all of the components. One of the key points of our power distribution system is the use of two separate batteries powering the whole ' +
              'system. There are a couple of reasons why this separation is necessary. First, there are components that generally are power-heavy, such ' +
              'as the thrusters, which usually require more power to run. These components require more powerful batteries, so it makes more sense to connect ' +
              'them to a bigger battery, while smaller components such as the pressure sensors connect to a smaller battery. Second, having two separate batteries ' +
              'allows us to completely isolate noise. Motors and thrusters usually generate a lot of noise which can interfere with more sensitive signals in the system. ' +
              'Our team uses one battery for the noisy and power-heavy components, and the other for sensitive low-power components. The use of optocouplers enables ' +
              'electrical isolation between the two batteries because optocouplers have an LED-phototransistor pair which allows us to make voltage references between ' +
              'the two batteries without actually physically connecting the two. ' +
              '<br ><br >' +
              'Another important component of power distribution is wiring. It is important to ensure that power-heavy components are connected with appropriate wires that ' +
              'are able to handle the required current and voltage. For sensitive components, it is important to make the wire connections as short as possible and physically ' +
              'distant from power-heavy wires to ensure that the sensitive readings don’t pick up noise in the system. Within the main enclosure, components are laid out to ' +
              'ensure these types of spacings are possible for all wiring. ',
            carousel: {
              images: ['/images/projects/PowerDistribution.png'],
              captions: [''],
            },
          },
          {
            header: 'Sound Localization',
            bodyFull:
              'In order to locate some of the tasks at Robosub, we are developing a system that will allow us to locate underwater pingers emitting sounds at known frequencies.  ' +
              'In order to do that, we are designing circuits to process signals coming out of a hydrophone (underwater microphone) and researching a variety of techniques to use  ' +
              'those signals for localization. This project is one of the more challenging and well rounded projects on the team, involving a wide range of design topics from analog  ' +
              'circuitry to firmware/software.  ' +
              '<br ><br > ' +
              'The high level diagram featured above shows one of the architectures we are currently considering for our system. At the moment, the project is still in its early stages  ' +
              'and a lot of the work we are currently doing is research based. In order to compare various implementations and techniques, we have built a simulator in Python from scratch  ' +
              'which puts an emphasis on modularity and flexibility. This will allow us to test a variety of configurations and implementations for the system to determine the optimal design.  ' +
              '<br ><br > ' +
              'Some of the tasks our members are currently working on include: designing the analog filters and pre-amplifier, maintaining and adding functionality to our simulator, researching  ' +
              'techniques to deal with reflections and multipath, researching various localization techniques such as multilateration and beamforming, and using our simulator to test the effectiveness  ' +
              'of different implementations.',
            carousel: {
              images: [
                '/images/projects/SoundLocalizationPCB.jpg',
                '/images/projects/SoundLocalizationFilters.jpg',
                '/images/projects/SoundLocalizationTest.png',
              ],
              captions: [
                'Underwater microphone amplifiers and filters.',
                'Filter reality vs. simulation.',
                'Data acquisition system and test data',
              ],
            },
          },
          {
            header: 'Battery Management',
            bodyFull:
              '<strong>Shown above:</strong> A diagram showing the major components of our battery management system. ' +
              '<br ><br > ' +
              'LiPo (lithium polymer) batteries are incredibly efficient for use in robotics, they’re lightweight, small, and can output very high currents. However they can also be very dangerous if not  ' +
              'maintained and used safely. The battery management systems team’s purpose is to ensure that the robots batteries are being used safely, and to protect the rest of the robot from any potential  ' +
              'harm they could cause. This project is great for anyone interested in gaining hands-on experience with the entire lifecycle of circuit design!  ' +
              '<br ><br > ' +
              'Our team is currently focused on three main projects and are integrated into the power management system:  ' +
              '<br ><br > ' +
              'Voltage Monitoring: This project is the first one the BMS team took on. A purely electrical circuit solution that acts as a kill switch to the entire robot. The killswitch is triggered in the event  ' +
              'that any cell in the battery goes below a safe voltage potentially harming the LiPo’s or our system. Throughout this project team members got experience designing a solution from scratch, hands-on  ' +
              'testing with lab equipment, troubleshooting and iterating on design, designing a PCB in Altium, and soldering/assembling the final circuit.  ' +
              '<br ><br > ' +
              'Current Monitoring: The purpose of the current monitor is to adjust current draw to safe levels, and as a last resort a kill switch to the entire system. This is a newer project still in the early design  ' +
              'and simulation testing phases. Our design is leveraging the use of a negative feedback op amp to keep the voltage on two nodes identical. Then using a shunt resistor in parallel with a larger reference  ' +
              'resistance we could monitor changes in voltage and measure its relationship to current to get a reading of how much current was entering our system. Currently team members are working on testing this design  ' +
              'in LTSpice, and adding features such as a 12A fuse to act as a kill switch, an LED indicator to notify us quickly if that fuse breaks and more. ' +
              '<br ><br > ' +
              'Temperature Monitoring: Still in the research phase, the purpose of temperature monitoring is to ensure that the batteries do not overheat and get damaged during operation. This is an especially important  ' +
              'feature since the robot is underwater, and the batteries are stored in small enclosures. The temperature data that is read electrically will then be sent to a microcontroller and subsequently the robot main  ' +
              'computer so we can adjust operation if the batteries begin to overheat. Currently team members are researching how to leverage the batteries’ integrated NTC thermistor to read temperature data.',
            carousel: {
              images: ['/images/projects/PowerDistribution.png'],
              captions: [''],
            },
          },
        ],
      },
      mechanical: {
        header: 'Mechanical Projects',
        body:
          'With access to in-person workspaces limited during the COVID-era, we have focused primarily  ' +
          'on CAD design, and on figuring out manufacturing techniques for said designs once in-person work is allowed  ' +
          'again. The mechanical team is divided into three sub-teams, represented by the buttons below. Feel free to click  ' +
          "on each one to see what they've been working on.",
        detail: [
          {
            header: 'Waterproofing and Enclosures',
            bodyFull:
              "<strong>Shown above:</strong> A Solidworks rendering of our robot's enclosures and their locations relative to eachother. " +
              '<br ><br >' +
              'In general, the projects we undertake involve creating watertight enclosures and electrical connections that are easy ' +
              'to access and maintain. ' +
              '<br ><br >' +
              'In order to access the components within the main enclosure, we have decided that all of the electronics should sit on ' +
              'a single platform. This platform rests on a pair or rails which allow the circuity to slide out of the enclosure. This provides ' +
              "us with easy access to the electronics without having to remove the enclosure itself from the robot's frame. The two battery enlosures " +
              '(seen below the main enclosure) lack a rail system, as we determined they would rarely need to be accessed once installed. ' +
              '<br ><br >' +
              "The most recent addition to Triton's suite of enclosures is the killswitch enclosure. This enclosure is small, simple, but important. " +
              "It houses our robot's emergency off switch, which is useful from both a safety and convenience standpoint. This switch would be operated " +
              'in any scenario where the robot starts moving in a dangerous or otherwise undesired way. ' +
              '<br ><br >' +
              "Another newer addition is the camera enclosure (seen directly below the main enclosure) which houses Triton's eyes. This enclosure consists " +
              'of one front-facing camera and one downward facing camera. This enclosure has been fully built and awaits integration and testing with the rest ' +
              "of Triton's systems. ",
            carousel: {
              images: ['/images/projects/Enclosures.JPG'],
            },
          },
          {
            header: 'Actuators',
            bodyFull:
              "<strong>Shown above:</strong> A sketch of Triton's general-purpose manipulator arm. " +
              '<br ><br >' +
              'There are several tasks in the Robosub competition that involve objects to be manipulated. To complete these tasks additional actuator systems are required. ' +
              'One of our actuator systems is a robotic manipulator arm, designed to grip and move various objects. So far, we have designed a 2-degree of freedom arm, with ' +
              'an end effector made for gripping. This project involves close collaboration with the electrical actuators team, making work on Triton’s actuators a very good ' +
              'exercise in mechatronics engineering. ' +
              '<br ><br >' +
              'Triton’s general manipulation arm has three rotary actuators controlling the robot’s position, one at the base of the robot arm, one turning the robot’s wrist and ' +
              'one opening and closing the robot’s gripper. The arm also utilizes a depth sensor to detect objects within its grasp and a flexible stretch sensor to control the ' +
              'gripper’s force. The project itself is still in its early stages, and we are planning on adding more degrees of freedom to the robot to increase the arm’s range of ' +
              'motion. Some of the tasks of this project include programming inverse/forward kinematics of the robot arm, spec-ing actuators and sensors, performing grip and stress ' +
              'tests, analog circuit design for motor driver and sensor circuits and designing future iterations of the arm to include more degrees of freedom. ' +
              '<br ><br >' +
              'All other actuator projects are still in the early brainstorming phase, meaning that there are substantial opportunites for new members to contribute ideas and learn about ' +
              'the exciting world of underwater actuation.',
            carousel: {
              images: ['/images/projects/Manipulator_arm_sketch.png'],
            },
          },
          {
            header: 'Frames and Hydrodynamics',
            bodyFull:
              "<strong>Shown above:</strong> Triton's frame structure and thruster configuration, Triton's passive stabilization system, and the frame design for our next generation robot. " +
              '<br ><br > ' +
              'The bulk of our projects focus on how to make our robot as hydrodynamic and structurally sound while moving through the water. We focus on initiatives such as fluid dynamics  ' +
              'modelling, stress simulations, and designing mounting hardware for enclosures.  ' +
              '<br ><br > ' +
              "Triton's frame design was developed to be as utilitarian and cost effective as possible. Although this led to sacrifices in hydrodynamics and aesthetics, it was done for a good reason.  " +
              'Our plan is that this generation of robot will serve as a test-bed for components of future robots, such as new actuators or camera systems. Unfortunately, this pursuit of a low-cost design  ' +
              'resulted in a limited number of thrusters being installed. As a result, Triton has 4 degrees of freedom instead of the ideal 6. This was partially dealt with by the addition of a passive  ' +
              'stability system consisting of bouyant styrofoam (top of robot) and solid ballast (lower section). This system helps prevent triton from flipping upside down underwater.  ' +
              '<br ><br > ' +
              "If style and mobility are more your thing, then you'll be happy to know our next generation robot encompasses just that. This iteration will have a carbon-fibre shell mounted to a solid metal plate.  " +
              "The shell is split into two pieces down the middle and will swing open for easy access to the enclosures within. Although thruster placement isn't final, we're certain that this version will be more agile than Triton.",
            carousel: {
              images: [
                '/images/projects/Frame_Isolation.JPG',
                '/images/projects/Ballast.JPG',
                '/images/projects/New_Frame1.png',
                '/images/projects/New_Frame2.png',
              ],
            },
          },
        ],
      },
    },
  },
};

export default content;
