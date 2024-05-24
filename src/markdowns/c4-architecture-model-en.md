# C4 Architecture Model

## Overview

The [C4 architecture model](https://c4model.com/) is an excellent framework for visualizing software system architectures, regardless of their complexity. It is easy to adopt and valuable for both technical and non-technical stakeholders. By breaking down the system into four hierarchical levels of detail—**Context**, **Container**, **Component**, and **Code**—the C4 model ensures that everyone maintains a clear and comprehensive understanding of the entire system. 

I have applied the C4 model in my past projects, and it has significantly benefited the entire team. Focusing on the Context and Container levels is particularly effective, and I will share some of my experiences with these levels below. For those interested in the Component and Code levels, I encourage you to visit the [official C4 model website](https://c4model.com/) for more details.

## Context

The Context level diagram in the C4 Model provides a clear and comprehensive overview of the entire project or even a broader scope. It allows us to easily understand the fundamental elements: who the users are, what relevant systems are involved, and the relationships among them.

 As the highest level in the C4 Model, the Context diagram we designed should always focus on the "big picture" ensuring that it is accessible and understandable to everyone, including non-technical stakeholders. This level is crucial for setting the stage, providing a bird's-eye view of the system, and facilitating effective communication across diverse audiences.

### Example

![Context Example Diagram](https://cdn.oran.zone/blogs/c4_example_context.png)

Let's consider an example where we are creating an official web portal for a company. The main functionalities of this portal include displaying information about the company and providing notifications to registered users via SMS and Email.

At the Context level, we start by identifying the key elements:

- **People**: The primary users relevant to the system are the web portal visitors. These include both potential customers and registered users who want to receive notifications.
- **System**: The central system in this case is the web portal itself, which serves as the main interface for users to access company information and register for notifications.
- **External Systems**: To enable SMS and Email notifications, we assume that need to integrate with external service providers for each method.

With these elements identified, we then establish the **Relationships** between them. For example:

- Visitors interact with the Web Portal to browse information about the company or to register for notifications.
- The Web Portal sends notification requests to the SMS Service Provider and Email Service Provider, which then deliver the notifications to the registered users.

By connecting these elements with arrows and annotations, now we can clearly depict how users interact with the system and how the system relies on external services to fulfill its functions.

## Container

The Container level zooms in on the system to display the fundamental building blocks that compose it. These building blocks can include frontend applications, backend services, databases, and other standalone units that function independently.

Compared to the Context level, the Container level provides more detailed insights into the system's internal structure, while still keeps the informamtion of interactions with users and external systems. It illustrates the various containers that make up the system, along with the technologies used to implement each container and the methods of communication between them. 

While it is still a high-level diagram, it offers additional technical information that is particularly valuable to people with technical background like developers and operation staff. This level of detail helps to bridge the gap between high-level overviews and low-level design, providing a comprehensive understanding of the system's architecture for technical stakeholders while maintaining accessibility for non-technical team members.

### Example

![Container Example Diagram](https://cdn.oran.zone/blogs/c4_example_container.png)

Let's continue with the example introduced in the Context section. We assume the architecture consists of a Single Page Application (SPA) as the frontend, an API application to provide necessary functionalities, a notification service to handle notification-related functions, and a database to store all the information used by the system.

To create the Container diagram based on the previous Context diagram, we can follow these steps:

1. **Start with the Context**: Retain the users and external systems from the Context diagram. Replace the system block with an empty system scope boundary that we will now zoom into.

2. **Add Containers**: Within the boundary created just now, add every container based on our assumed architecture. During the creation of each container, providing a short description and specifying the technologies used are always helpful.

3. **Add Relationships**: Show how the containers interact with each other. For example, the SPA communicates with the API application via HTTP requests, and the API interacts with the database to retrieve or store data.

4. **Revise External Interactions**: Update the interactions with users and external systems to reflect the new details. For example, the SPA interacts with users for browsing information and registration, while the notification service communicates with external notification service providers via HTTP requests.

By following these steps, we create a comprehensive container diagram that clearly illustrates the high-level architecture with useful technical details. This diagram is valuable to everyone involved in the project and especially beneficial to technical stakeholders.

## Practical Tips

- **Tools for Drawing Diagrams**: I highly recommend using [draw.io](https://www.drawio.com/) to create C4 diagrams. It offers both a web version and a free downloadable application. With its rich set of annotations, including embedded C4 annotations, it makes working on C4 models very convenient. Additionally, there are other tools available online that you can explore.
- **Start with Context**: Always begin with the big picture by creating a Context diagram, especially when organizing or cleaning up an existing project. This top-down approach helps you understand the overall architecture before delving into the complex relationships between individual services or code components. It ensures that you don't get overwhelmed by details too early in the process.
- **Avoid Crossed Arrows**: As the complexity of your diagrams increases, particularly at the lower levels, it's common to encounter crossed arrows representing relationships. To improve clarity, try reorganizing the containers to minimize crossed arrows. This reorganization can significantly reduce the cognitive load for new viewers trying to understand the relationships within the system.
- **Consistent Naming and Descriptions**: Use clear and consistent naming conventions and descriptions for all elements in your diagrams. This practice helps in maintaining uniformity and makes it easier for all stakeholders to understand the components and their roles within the system.
- **Iterative Refinement**: Keep in mind to iterate on your diagrams. As you gather more feedback and insights, or as the architecture evolves, refine your diagrams to better represent the system. This iterative approach ensures that your diagrams remain accurate and useful over time.


## Additional Readings

- [Official C4 Model Website](https://c4model.com/)
- [Simon Brown - Author of C4 Model](https://simonbrown.je/)
- [InfoQ | The C4 Model for Software Architecture](https://www.infoq.com/articles/C4-architecture-model/)