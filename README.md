# Offline Lecture AI & Quiz Generator

**Offline Lecture AI & Quiz Generator** is an offline-first learning application designed to turn lecture materials into interactive quizzes and document-based AI conversations.

Users can upload **PDF or DOCX lecture files**, organize them into subject folders, generate quizzes from the uploaded content, track their progress, and chat with the lesson using an AI assistant that is strictly limited to the provided material.

The main goal is to create a study tool that remains useful even without an internet connection.

## What Users Can See

### 1. Dashboard

The dashboard provides a quick overview of the user's study activity.

Users can see:

* Total subjects or folders
* Total uploaded lessons
* Total generated quizzes
* Overall quiz progress
* Recently opened lessons
* Recent quiz activity
* Study statistics

### 2. Subject / Folder Manager

Users can create folders to organize their lessons.

Example:

```text
My Subjects
├── Mathematics
├── English
├── Science
├── Programming
└── Network Fundamentals
```

Each folder displays:

* Folder name
* Number of lessons
* Number of available quizzes
* Completion percentage
* Last activity

### 3. Lecture Upload

Users can upload lecture materials directly from their device.

Supported formats:

* PDF
* DOCX

The application processes the document locally and extracts its readable text without sending the document to an online server.

### 4. Lecture Viewer

After uploading a document, users can view its information before generating a quiz.

The interface can display:

* Document title
* File type
* File size
* Page count when available
* Extracted text preview
* Assigned subject/folder
* Upload date

### 5. Quiz Generator

Users can select how the quiz should be generated.

Available formats:

* Multiple Choice
* Identification
* Enumeration
* Matching Type
* Random Mix

Users can also select the number of questions before generation.

Example:

```text
Quiz Settings

Question Type: Random Mix
Number of Questions: 20
Difficulty: Mixed

[ Generate Quiz ]
```

### 6. Interactive Quiz Screen

Generated questions appear in an interactive quiz interface.

Users can:

* Answer questions
* Move between questions
* Review previous answers
* Submit the quiz
* See their score
* Review incorrect answers
* Retry the quiz

### 7. Quiz Results

After completing a quiz, users can see:

```text
Quiz Complete

Score: 17 / 20
Accuracy: 85%

Correct Answers: 17
Incorrect Answers: 3

[ Review Answers ]
[ Retry Quiz ]
```

The result can also be saved locally for future progress tracking.

### 8. Progress Tracking

Each subject folder tracks study progress.

Example:

```text
Mathematics
██████████████░░░░ 75%

English
██████████░░░░░░░░ 50%

Science
██████████████████ 100%
```

Progress can be calculated from:

* Completed quizzes
* Answered questions
* Quiz accuracy
* Lessons completed

### 9. Offline AI Assistant

Users can open a lesson and chat directly with the uploaded material.

Example:

```text
User:
What is the main purpose of photosynthesis?

AI:
Photosynthesis is the process described in the lesson
where plants use light energy to produce food.
```

The assistant is restricted to the uploaded lesson.

For an unrelated question:

```text
User:
What is the capital of Japan?

AI:
Please ask about the lesson. I cannot answer questions
outside the provided material.
```

### 10. Lesson Chat History

Previous conversations can be stored locally so users can return to them later.

Users can:

* Continue previous conversations
* Clear a conversation
* Start a new chat
* Switch between lessons

### 11. Local Library

The application includes a personal lecture library where users can manage uploaded materials.

Users can:

* Open a lesson
* Rename a lesson
* Move a lesson to another folder
* Delete a lesson
* Generate another quiz
* Continue previous quizzes

### 12. Offline Status Indicator

The interface clearly shows whether the application is running offline.

Example:

```text
● Offline Mode
All data is stored locally on this device.
```

This reinforces the application's privacy and offline-first design.

---

# New Features

The following features can make the project more complete and useful while keeping the same concept.

## 1. Difficulty Selection

Allow users to choose:

* Easy
* Normal
* Hard
* Mixed

Example:

```text
Difficulty
○ Easy
● Normal
○ Hard
○ Mixed
```

## 2. Number of Questions

Allow users to generate a custom number of questions.

Example:

```text
Questions
5
10
20
30
50
Custom
```

## 3. Quiz Timer

Optional timer for timed practice.

Example:

```text
Time Remaining
14:32
```

The timer should be optional so users can study without pressure.

## 4. Wrong Answer Review

Create a section containing previously missed questions.

```text
Mistake Review

3 questions need review.

[ Start Review ]
```

This turns previous mistakes into future study material.

## 5. Bookmark Questions

Users can bookmark difficult questions.

Example:

```text
★ Bookmarked Questions
```

Bookmarked questions can later be turned into a review quiz.

## 6. Study Mode

Add a non-quiz study mode where users can review extracted lecture content.

Possible sections:

```text
Lesson
Key Points
Definitions
Important Terms
Notes
```

## 7. AI Summary

The local AI can generate a short summary based strictly on the uploaded lecture.

Example:

```text
Lesson Summary

• Topic 1
• Topic 2
• Important definition
• Main concept
• Key example
```

## 8. Key Terms Extraction

Automatically detect important terms from the lecture.

Example:

```text
Important Terms

Encapsulation
Inheritance
Polymorphism
Abstraction
Interface
```

These terms can also be used to generate quizzes.

## 9. Flashcards

Generate flashcards directly from the uploaded lesson.

Example:

```text
┌─────────────────────────┐
│ What is Encapsulation?  │
│                         │
│         FLIP             │
└─────────────────────────┘
```

Users can study using:

* Flashcards
* Quiz mode
* Review mode

## 10. Custom Quiz Builder

Allow users to manually choose which questions or topics should appear in a quiz.

Example:

```text
Topics
☑ Chapter 1
☑ Chapter 2
☐ Chapter 3

Question Types
☑ Multiple Choice
☑ Identification
☐ Enumeration
```

## 11. Automatic Progress Saving

The application should automatically save:

* Current quiz position
* Selected answers
* Completed questions
* Quiz results
* Folder progress
* Chat history

This allows the user to close the application and continue later.

## 12. Persistent Local Storage

All important application data should remain available after restarting the application.

Stored data can include:

```text
Documents
Folders
Extracted Text
Generated Quizzes
Quiz Results
Progress
Bookmarks
Flashcards
Chat History
Settings
```

## 13. Search

Add global search for:

* Lessons
* Subjects
* Questions
* Flashcards
* Important terms

Example:

```text
Search: polymorphism

2 lessons found
14 questions found
6 flashcards found
```

## 14. Export / Import Backup

Allow users to back up their local study data.

Example:

```text
[ Export Backup ]
[ Import Backup ]
```

This can protect against accidental data loss when supported by the chosen platform.

## 15. Dark Mode

Provide a full dark/light theme switch.

```text
Appearance
○ Light
● Dark
○ System
```

## 16. Study Statistics

Add a statistics page showing:

```text
Study Statistics

Lessons: 24
Quizzes Completed: 48
Questions Answered: 732
Average Score: 86%
Best Score: 100%

Most Studied Subject:
Network Fundamentals
```

## 17. Recently Studied

The application can show the user's most recently accessed materials.

Example:

```text
Continue Studying

Network Fundamentals
Chapter 3 — IP Addressing

[ Continue ]
```

## 18. Smart Question Regeneration

Allow users to regenerate a quiz using the same lesson without replacing the previous quiz.

Example:

```text
Network Fundamentals

Quiz #1 — 20 Questions
Quiz #2 — 20 Questions
Quiz #3 — 10 Questions
```

This allows users to practice the same lesson multiple times.

---

# Core Architecture

The application is designed around an offline-first architecture.

```text
User
 │
 ▼
Local UI
 │
 ├── Document Upload
 │       │
 │       ▼
 │   Local Parser
 │       │
 │       ▼
 │   Extracted Text
 │
 ├── Quiz Generator
 │       │
 │       ▼
 │   Local LLM
 │
 ├── AI Assistant
 │       │
 │       ▼
 │   Context Filtering
 │
 └── Local Database
         │
         ├── Lessons
         ├── Folders
         ├── Quizzes
         ├── Results
         ├── Progress
         ├── Flashcards
         └── Chat History
```

## Proposed Technologies

### Frontend

The UI can be implemented using a modern local-first web application architecture.

### Document Processing

Potential libraries:

* **PDF.js** — PDF text extraction
* **Mammoth.js** — DOCX text extraction

### Local Storage

Potential options:

* SQLite
* IndexedDB
* Local-first storage layer

### Local AI

Potential options:

* llama.cpp
* WebLLM
* ONNX Runtime
* Other compatible local LLM runtimes

The exact model and runtime can depend on the target platform and available device hardware.

---

# Privacy

The application's main design principle is local processing.

```text
Your Lecture
     ↓
Local Device
     ↓
Local Parser
     ↓
Local Database
     ↓
Local AI
```

No internet connection should be required for normal document processing, quiz generation, or document-based chat once the required AI model and application components are installed locally.

Because everything is designed to operate on-device, lecture materials do not need to be uploaded to a remote AI service.

---

# Planned User Flow

```text
Open App
   ↓
Dashboard
   ↓
Create Subject Folder
   ↓
Upload Lecture
   ↓
Extract Document Text
   ↓
Open Lesson
   ↓
Choose Quiz Type
   ↓
Generate Quiz
   ↓
Answer Questions
   ↓
View Results
   ↓
Save Progress
```

For document chat:

```text
Open Lesson
   ↓
AI Assistant
   ↓
Ask Question
   ↓
Search Uploaded Context
   ↓
Generate Answer
   ↓
Return Context-Based Response
```

---

# Main Goals

The project focuses on four main ideas:

**Offline** — The application should work without internet access.

**Private** — Lecture materials remain on the user's device.

**Context-Bounded** — The AI should answer using the uploaded material rather than general outside knowledge.

**Interactive** — Lectures become quizzes, flashcards, summaries, chat sessions, and progress-based study activities.

---

# Project Status

**Upcoming / In Design Phase**

The project is currently being planned and designed. Development will focus on establishing reliable local document processing, persistent storage, quiz generation, and local AI inference before expanding into advanced study features.
