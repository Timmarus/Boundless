# Meeting Minutes
---

### Participants:
***
##### (K) Kevin Gao: gaozi2
##### (W) William Gan: ganweizo
##### (A) Abdulwasay Mehar: meharabd
##### (KE) Kenneth Chyzewski: chyzewsk
##### (J) Jonathan Leung: leungj56
##### (T) Ensar (Timm) Ilyas: ilyasens
##### (P) Prashil Gandhi: gandhi45
***

### Sprint Backlog



--------------------------------------------------------------------------
```
TYPE     : USER STORY 26
NAME     : Redesign Chat
OWNER    : T
PRIORITY : 21
ESTIMATE : 8 hour
AS A     : Student
I WANT   : the chat to have a cleaner, responsive design free of bugs.
SO THAT  : I can increase productively and navigate the platform seamlessly.
TASKS:
	- (T) Join chat and chat selection into one page.
	- (T) Design and implement a better chat flow.
	- (T) Fix bugs related to alignment and spacing (e.g. chats randomly spreading out on incoming message). 
```
--------------------------------------------------------------------------

--------------------------------------------------------------------------
```
TYPE     : USER STORY 27
NAME     : Redesign user flow
OWNER    : T
PRIORITY : 21
ESTIMATE : 5 hour
AS A     : Student
I WANT   : to navigate between the menus in the platform easily.
SO THAT  : I can navigate to the appropriate menus when clicked.
TASKS:
	- (T) Update Login and Register pages.
	- (T) Update Settings and Bio pages.
	- (T) Update Chat pages. 
```
--------------------------------------------------------------------------
--------------------------------------------------------------------------
```
TYPE     : USER STORY 28
NAME     : Mobile Support
OWNER    : T
PRIORITY : 13
ESTIMATE : 9 hour
AS A     : Student
I WANT   : the site to work well and look nice on my phone.
SO THAT  : I can check my course chat on both the web app and on my phone.
TASKS:
	- (T) Update chat to better fit mobile screens.
	- (T) Update site-wide design.
```
--------------------------------------------------------------------------

--------------------------------------------------------------------------
```
TYPE     : USER STORY 13
NAME     : App Sharing
OWNER    : K
PRIORITY : 1
ESTIMATE : 3 hour
AS A     : Student
I WANT   : the site to work well and look nice on my phone.
SO THAT  : I can check my course chat on both the web app and on my phone.
TASKS:
	- (K) Create social media buttons for users to click on.
	- (K) Redirect users to appropriate social media sites.
```
--------------------------------------------------------------------------
--------------------------------------------------------------------------
```
TYPE     : USER STORY 29
NAME     : Chatrooms
OWNER    : T
PRIORITY : 21
ESTIMATE : 11 hour
AS A     : Developer
I WANT   : to configure the UI to the correct chatroom id on screen.
SO THAT  : I can go to the correct chatroom as specified by the id.
TASKS:
	- (T) Configure to connect chatroom to a specified channel path from the database.
	- (T) Configure UI that only displays messages from the specific channel.
	- (A) Configure backend to automatically create new chat rooms when needed.
```
--------------------------------------------------------------------------
--------------------------------------------------------------------------
```
TYPE     : USER STORY 30
NAME     : Search Functionality 
OWNER    : A, J
PRIORITY : 13
ESTIMATE : 5 hour
AS A     : Student
I WANT   : to search the chat for keywords.
SO THAT  : I can find important information in a timely manner.
TASKS:
	- (A) Configure search functionality in chatroom (possibly using global state).
	- (A) Configure UI to display the results of the search (maybe a new page).
```
--------------------------------------------------------------------------
--------------------------------------------------------------------------
```
TYPE     : USER STORY 31
NAME     : Current Members
OWNER    : T
PRIORITY : 8
ESTIMATE : 7 hour
AS A     : Student
I WANT   : to see all members of the current chat.
SO THAT  : I can find peers and new classmates.
TASKS:
	- (T) Configure Database to keep track of the active members of the chatroom.
	- (T) Configure Chatroom ui to display all the people who are currently part of the chat.
	- (T) Update Database and UI when the user leaves the chatroom.
```
--------------------------------------------------------------------------
--------------------------------------------------------------------------
```
TYPE     : USER STORY 32
NAME     : File Upload
OWNER    : A
PRIORITY : 21
ESTIMATE : 10 hour
AS A     : Student
I WANT   : to upload images to a chat.
SO THAT  : members of the chat can share images of notes and questions.
TASKS:
	- (A) Configure UI to select Image files only.
	- (A) Limit image upload size to 1MB.
	- (A) Compress images before uploading uploading to the database.
	- (A) Upload Image to the database with a unique path, and configuring image meta data as a message in the channel the image was uploaded.
	- (A) Configure UI to display image messages.
```
--------------------------------------------------------------------------

--------------------------------------------------------------------------
```
TYPE     : USER STORY 9
NAME     : Report Users 
OWNER    : A, K
PRIORITY : 13
ESTIMATE : 7 hour
AS A     : Student
I WANT   : to report certain users if they aren't positively contributing to a specific chatroom.
SO THAT  : Each chatroom contains important information.
TASKS:
	- (A) Hook up report page to database.
	- (K) Able to report a user when they misbehave in a chatroom.
	- (K) Implement UI for reporting.
```
--------------------------------------------------------------------------

--------------------------------------------------------------------------
```
TYPE     : USER STORY 33
NAME     : Course Selection Validation
OWNER    : KE
PRIORITY : 13
ESTIMATE : 9 hour
AS A     : Developer
I WANT   : user to not be able to enroll into more than 6 courses at any given time and to fix issues with course adding.
SO THAT  : the user will not get confused.
TASKS:
	- (KE) Configure Register page with 6 course validation.
	- (KE) Configure Register to work when the user has not selected any courses.
	- (KE) Configure main Dashboard when there aren't any selected courses.
```
--------------------------------------------------------------------------

--------------------------------------------------------------------------
```
TYPE     : USER STORY 34
NAME     : Multiple University Flow
OWNER    : W, KE
PRIORITY : 21
ESTIMATE : 6 hour
AS A     : Student
I WANT   : to be able to enroll courses that are within my university.
SO THAT  : I don't end up talking to other people from other universities.
TASKS:
	- (W) Add in Options for universities in Register.
	- (W) Add in options for universities in Settings so we can get the courses aligned.
	- (KE) Add in more courses for users.
	- (W) Remove extra pages collapsed into others.
```
--------------------------------------------------------------------------

--------------------------------------------------------------------------
```
TYPE     : USER STORY 35
NAME     : Registration Validation
OWNER    : A
PRIORITY : 1
ESTIMATE : 3 hour
AS A     : Student
I WANT   : to be able to see on the website if my registration was not successful.
SO THAT  : I can fix up my information and register successfully.
TASKS:
	- (A) Update ui when firebase gives and error while attempting to register the user.
	- (A) Handle UI when the user tries to add more than 6 courses. (Create and indication for the user)
```
--------------------------------------------------------------------------

--------------------------------------------------------------------------
```
TYPE     : USER STORY 36
NAME     : Login Validation
OWNER    : J
PRIORITY : 1
ESTIMATE : 5 hour
AS A     : Student
I WANT   : to be able to see on the website if my login was not successful
SO THAT  : I can enter the correct credentials and login succesfully.
TASKS:
	- (J) Update ui when firebase gives and error while attempting to register the user.
```
--------------------------------------------------------------------------
