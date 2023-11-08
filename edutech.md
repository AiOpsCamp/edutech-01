# Technical Test Instructions

For the technical test, please set up a React application with the following features:

1. Implement a user authentication system using Firebase.
2. Develop two main components named 'Home' and 'Course'.
3. The 'Home' component should display a list of courses. You may use static or dummy data for these courses; feel free to craft this data yourself in a JSON format.
4. Upon selecting a course from the 'Home' component, details of the course should be presented to the user.

For inspiration and a clearer understanding of the functionality, please refer to educational platforms such as Educative.io, udemy.com, or ostad.com. If you need further clarification on the task, don't hesitate to ask.

# Sample JSON Data

### All Courses
There should be 
```json

### All Courses

```json
{
  "allCourses": [
    {
      "id": "course1",
      "title": "Introduction to Programming",
      "category": "Computer Science",
      "thumbnail": "url_to_thumbnail_image",
      "description": "Learn the basics of programming with this introductory course.",
      "price": 99.99
    },
    {
      "id": "course2",
      "title": "Advanced Web Development",
      "category": "Web Development",
      "thumbnail": "url_to_thumbnail_image",
      "description": "Dive deeper into web development with advanced techniques and frameworks.",
      "price": 149.99
    },
    {
      "id": "course3",
      "title": "Data Science Essentials",
      "category": "Data Science",
      "thumbnail": "url_to_thumbnail_image",
      "description": "Start your journey in data science, learn about data manipulation and visualization.",
      "price": 199.99
    },
    {
      "id": "course4",
      "title": "Machine Learning with Python",
      "category": "Machine Learning",
      "thumbnail": "url_to_thumbnail_image",
      "description": "Gain a solid foundation in machine learning principles with Python.",
      "price": 299.99
    },
    {
      "id": "course5",
      "title": "Full-Stack Development",
      "category": "Full-Stack",
      "thumbnail": "url_to_thumbnail_image",
      "description": "Become a full-stack developer by learning both front-end and back-end technologies.",
      "price": 349.99
    },
    {
      "id": "course6",
      "title": "Cybersecurity Fundamentals",
      "category": "Cybersecurity",
      "thumbnail": "url_to_thumbnail_image",
      "description": "Understand the basics of cybersecurity and how to protect digital assets.",
      "price": 399.99
    }
  ]
}

Enrolled courses:
{
  "enrolledCourses": [
    {
      "courseId": "course1",
      "enrollmentDate": "2023-01-15",
      "progress": 20
    },
    {
      "courseId": "course3",
      "enrollmentDate": "2023-02-05",
      "progress": 50
    },
    {
      "courseId": "course5",
      "enrollmentDate": "2023-03-20",
      "progress": 75
    }
  ]
}


### Course Details: ( you can just design for one course details, dont need to do it for every course)
```
{
  "courseDetails": {
    "id": "course1",
    "title": "Data Structures with Generic Types in Python",
    "level": "Beginner",
    "interactive": true,
    "fullDescription": "Dive into data structures in Python with a focus on generic types. This course offers a blend of theory and practical application with interactive elements to enhance learning.",
    "duration": "29 hours",
    "lessonsCount": 96,
    "certificateOfCompletion": true,
    "completionStatus": "2% Completed",
    "instructor": {
      "name": "Jane Doe",
      "profilePicture": "url_to_author_cover_image"
    },
    "price": 99.99,
    "offerToAddCertificate": "Add a certificate for $19",
    "courseIncludes": {
      "playgrounds": 46,
      "quizzes": 14,
      "illustrations": 251
    },
    "alternateLanguages": ["C++", "Java"],
    "takeawaySkills": [
      "A thorough understanding of data structures and algorithms",
      "Working knowledge of array-based, linked list-based, and blended implementations",
      "Hands-on experience of Python interfaces, classes, and templates",
      "Familiarity with complexity analysis of data structures"
    ],
    "reviews": [
      // ... reviews
    ]
  }
}
```
