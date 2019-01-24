# COMPLETED USER STORIES/BUGS BELOW ###########################################


# INCOMPLETE USER STORIES/BUGS BELOW ###########################################
--------------------------------------------------------------------------
TYPE     : USER STORY 1 : chyzewsk
NAME     : Draw Circle
OWNER    : Kenneth
PRIORITY : 1
AS A     : user
I WANT   : To click the center of the circle, drag, and release to specify
           a circle to be drawn in the current style.
SO THAT  : I can add circles to my canvas
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 2 : chyzewsk
NAME     : Draw Circle Feedback
OWNER    : Kenneth
ESTIMATE : 4 hours
PRIORITY : 1
AS A     : user
I WANT   : As a user is specifying a Circle, during the drag, a 'current'
           circle should be on display. As the user drags, the 'current'
           circle changes in real time so that a circle is drawn with
           centre at users initial circle click, with radius out to
           the current dragged mouse position.
SO THAT  : I can see the circle I am about to build on release of the mouse
           button.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 3 : chyzewsk
NAME     : Draw Rectangle
OWNER    : Kenneth
PRIORITY : 2
ESTIMATE : 2 hours
AS A     : user
I WANT   : To click on one corner of a rectangle, drag, and release to 
		   specify two corners of a rectangle to be drawn in the current style.
SO THAT  : I can add rectangles to my canvas
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 4 : fakhryah
NAME     : Draw Rectangle Feedback
OWNER    : Ahmad
PRIORITY : 2
ESTIMATE : 2 hours
AS A     : user
I WANT   : Similarly to Draw Circle Feedback, display the rectangle in mid construction.
SO THAT  : I can see the rectangle I am about to build on release of the mouse button.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 5 : syedelha
NAME     : Color selector
OWNER    : Elhan
PRIORITY : 3
ESTIMATE : 4 hours
AS A     : user
I WANT   : To be able to select the current drawing color, to be applied
           to subsequent shapes. Example: 
           		selects color red 
           		mode circle
           		draw a circle
           		draw a circle
           		mode rectangle
           		draw a rectangle
           		select color green
           		draw a rectangle
           		draw a rectangle
           		select mode squiggle
           		draw a squiggle
           	results in two red circles and a red rectangle as well as
           	two green rectangles and a green squiggle
SO THAT  : I can change the colour of each drawing I make.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 6 : syedelha
NAME     : Fill style selector
OWNER    : Elhan
PRIORITY : 3
ESTIMATE : 4 hours
AS A     : user
I WANT   : To be able to select the current drawing style (filled or outline), to be applied
           to subsequent shapes. Example: 
           		selects fill style solid
           		mode circle
           		draw a circle
           		draw a circle
           		mode rectangle
           		draw a rectangle
           		select fill style outline
           		draw a rectangle
           		draw a rectangle
           		select mode squiggle
           		draw a squiggle
           	results in two solid circles and a solid rectangle as well as
           	two outlined rectangles and a squiggle
SO THAT  : I can alternate between hollow and filled in shapes.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 7 : syedelha
NAME     : Line thickness selector
OWNER    : Elhan
PRIORITY : 4
ESTIMATE : 3 hours
AS A     : user
I WANT   : To be able to select the current line thickness, to be applied
           to subsequent shapes. Example:
           		select fill style outline 
           		selects line thickness 1
           		mode circle
           		draw a circle
           		draw a circle
           		mode rectangle
           		draw a rectangle
           		select line thickness 9
           		draw a rectangle
           		draw a rectangle
           		select mode squiggle
           		draw a squiggle
           	results in two thinly outlined circles and a thinly outlined 
           	rectangle as well as two thickly outlined rectangles and a thick squiggle
SO THAT  : I can see on the view what the thickness of the line is.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 8 : fakhryah
NAME     : Draw Square
OWNER    : Ahmad
PRIORITY : 2
ESTIMATE : 2 hours
AS A     : user
I WANT   : To click on one corner of a square, drag, and release to 
		   specify two corners of a rectangle to be drawn in the current style.
SO THAT  : I can add squares to my canvas
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 9 : fakhryah
NAME     : Draw Square Feedback
OWNER    : Ahmad
PRIORITY : 2
ESTIMATE : 2 hours
AS A     : user
I WANT   : Similarly to Draw Circle Feedback, display the square in mid construction.
SO THAT  : I can see the square I am about to build on release of the mouse button.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 12 : chyzewsk
NAME     : Pop-up help menu
OWNER    : Kenneth
PRIORITY : 6
ESTIMATE : 2 hours
AS A     : user
I WANT   : A help menu to appear.
SO THAT  : When I click on the tab, it gives a description of how the paint program
			works.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 13 : chyzewsk
NAME     : New/ Restart button
OWNER    : Kenneth
PRIORITY : 6
ESTIMATE : 1 hour
AS A     : user
I WANT   : A new paint or restart paint option.
SO THAT  : When I want to restart a new project, I simply click the button to do so.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 14 : chyzewsk
NAME     : Quit button
OWNER    : Kenneth
PRIORITY : 6
ESTIMATE : 1 hour
AS A     : user
I WANT   : A button that closes the application.
SO THAT  : When I finish my painting, I can finish and close he program.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 18 : fakhryah
NAME     : Polyline
OWNER    : Ahmad
PRIORITY : 1
ESTIMATE : 30 minutes
AS A     : user
I WANT   : To put points into the drawing board.
SO THAT  : create line between each point.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 18.1 : syedelha
NAME     : Implement Polyline
OWNER    : Elhan
PRIORITY : 1
ESTIMATE : 2 hours
ISSUE    : Polyline does not restart when the mode is changed.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 19 : syedelha
NAME     : Eraser
OWNER    : Elhan
PRIORITY : 5
ESTIMATE : 2 hours
AS A     : user
I WANT   : To be able to erase lines on the paint canvas.
SO THAT  : I can redraw them more accurately to how I want them to be.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 20 : syedelha
NAME     : Draw rounded edges rectangle
OWNER    : Elhan
PRIORITY : 6
AS A     : user
I WANT   : Draw a rectangle with rounded edges
SO THAT  : I can add circles to my canvas
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 1 : chyzewsk
NAME     : Icons instead of text for drawing mode selection
OWNER    : Kenneth
PRIORITY : 5
ESTIMATE : 2 hours
ISSUE    : Would be nice to have icons instead of "Circle", "Rectangle", ...
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 2 : chyzewsk
NAME     : Drawing selection mode not indicated
OWNER    : Kenneth
PRIORITY : 5
ESTIMATE : 4 hours
ISSUE    : Currently ,you can't tell which mode "Circle", "Rectangle", ...
           is currently selected. Is JButton correct, is there a way
           to highlight the currently selected mode?
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 2.1 : syedelha
NAME     : Architecture for drawing shapes can be improved
OWNER    : Elhan
PRIORITY : 2
ESTIMATE : 8 hours
ISSUE    : The architecture can be improved if we implement the Command Design 
Pattern to draw shapes as follows:

The PaintModel should use the command design pattern. 
That is, each shape knows how to draw itself, so there is a single list of 
DrawingCommands maintained by the PaintModel and used by the PaintPanel.
paintComponent simply asks the PaintModel to ask command to execute(g2d).
The simplest way to make this happen is to make each shape implement the 
DrawingCommand interface which requires execute(g2d) to be implemented.
Well sort of.

NOTE: The PaintModel does know how to logically draw itself, so does
know about strokes and pen colors etc. Depending on how much you want
to split off the logical from the GUI, it may not have to know how to 
draw on the screen. This is a subtle difference. For example, the
following logically describes a scene, without actually knowing
how to draw it on the screen (using j2d)...

Color = green
Fill = off
Border = on
BorderWidth = 10
Circle radius 10 at 12,15
Color = red
Fill = on
FillColor = black
Border = on
BorderWidth = 7
Square width 20 at 100,200

If you want to build a more 'logical' PaintModel, you can consider ...

1) Create a mirror hierarchy for Shape, this mirror hirerachy 
has things like DrawableCircle which has a Circle. The DrawableCircle
knows how to draw the instance of Circle it holds. Each Shape will
still need information about its color, and stroke, one way or another.

OR

2) Lookup and apply the Visitor design pattern to the more logical
PaintModel.

--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 2.2 : fakhryah
NAME     : Architecture for handling shape modifiers can be improved 
OWNER    : Ahmad
PRIORITY : 3
ESTIMATE : 8 hours
ISSUE    : The architecture can be improved if we implement the Command Design 
Pattern to handle changes to the graphics contex such as changing drawing 
color, stroke width etc. You can accomplished this by wrapping the changes
to the graphics context in a DrawingCommand. This way these changes can be
added to the Bug 2.1 DrawingCommand list. That is, these new types of 
DrawingCommands appear on PaintPanel's list right along side 
the Shape type DrawingCommands.

WHAT WAS DONE: We store the thickness, colour, and whether or not the shape
is filled in the actual shape. When it is drawn the attributes are applied.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 2.3 : chyzewsk
NAME     : Architecture behind choosing drawing mode is poor
OWNER    : Kenneth
PRIORITY : 3
ESTIMATE : 4 hours
ISSUE    : A better architecture behind selecting a drawing mode can be created 
by implementing the Factory Design Pattern as follows:

The factory design pattern should be used by the paint buttons. 
The factory is responsible for creating different ShapeManipulatorStrategy 
instances (see BUG 2.4). That is, when a button is pressed, the appropriate 
ShapeManipulatorStrategy is created and installed in the PaintPanel. 
Note that you can associate text with a button, even if you 
display an ImageIcon. The string attached to the button causes the right choice 
of object creation.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 2.4 : chyzewsk
NAME     : Architecture behind creating shape instances is poor
OWNER    : Kenneth
PRIORITY : 3
ESTIMATE : 4 hours
ISSUE    : A better architecture for creating shape instances so that it is 
more flexible, and easier to work with can be created using the Strategy Design 
pattern as follows:

Create class/abstract class/interface  ShapeManipulatorStrategy as well 
as subclasses/implementators for each type of Shape. Call these the
concrete ShapeNamipulatorStrategies

The concrete ShapeManipulatorStrategies are responsible for 

1. Creating instances of Shape and putting them on top of 
   the PaintModel command stack.

2. Understanding how mouse events modify the shape at the top of the 
   PaintModel command stack.

3. Calling the PaintPanel repaint at appropriate times.

This strategy can be put in place either by having PaintPanel's mouse 
events forwarded through PaintPanel into the current strategy, or by 
simply switching the PaintPanel's listeners as appropriate.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 5 : syedelha
NAME     : Squiggle is broken
OWNER    : Elhan
PRIORITY : 3
ESTIMATE : 4 hours
ISSUE    : Squiggles are connected to each other by a straight line. Each drag
		   of the mouse should be a separate squiggle. Possibly
           the issue is with the representation of the squiggles in the Model.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 6 : fakhryah
NAME     : Rectangle is broken
OWNER    : Ahmad
PRIORITY : 1
ESTIMATE : 4 hours
ISSUE    : Rectangles only work in one direction
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 7 : fakhryah
NAME     : Square is broken
OWNER    : Ahmad
PRIORITY : 1
ESTIMATE : 4 hours
ISSUE    : Squares only work in one direction
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 8 : syedelha
NAME     : Circle drawing is broken
OWNER    : Elhan
PRIORITY : 3
ESTIMATE : 4
ISSUE    : The first click should specify the center of the circle, with
           a drag for the radius. This is not the case in the current
           implementation.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 10 : fakhryah
NAME     : Eraser doesn't reset on resetState();
OWNER    : Ahmad
PRIORITY : 4
ESTIMATE : 1 hour
ISSUE    : Erases don't leave the canvas after calling the clear function
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 11 : chyzewsk
NAME     : Drawings don't reset on resetState();
OWNER    : Kenneth
PRIORITY : 1
ESTIMATE : 1 hour
ISSUE    : When restarting the canvas, the shapes remain on screen
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 12 : syedelha
NAME     : Undo/ Redo don't work properly
OWNER    : Elhan
PRIORITY : 1
ESTIMATE : 8 hour
ISSUE    : When the user chooses to undo or redo a drawing, nothing happens
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 13 : fakhryah
NAME     : Button icons move for different modes
OWNER    : Ahmad
PRIORITY : 2
ESTIMATE : 1 hour
ISSUE    : When the user chooses a different mode, the size of the buttons
			also change for select modes
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 14 : fakhryah
NAME     : Eraser doesn't have an icon
OWNER    : Ahmad
PRIORITY : 5
ESTIMATE : 1 hour
ISSUE    : All the buttons have an icon of what the button does, except 
			eraser
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 15 : fakhryah
NAME     : Rounded rectangle doesn't have an icon
OWNER    : Ahmad
PRIORITY : 5
ESTIMATE : 1 hour
ISSUE    : All the buttons have an icon of what the button does, except 
			rounded rectangle
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 16 : chyzewsk
NAME     : JButtons are designed poorly
OWNER    : Kenneth
PRIORITY : 1
ESTIMATE : 1 hour
ISSUE    : Arnold said my button design is poorly done and desperately needs
			redoing
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 17 : chyzewsk
NAME     : Eraser is changing colour and thickness with the squiggle
OWNER    : Kenneth
PRIORITY : 1
ESTIMATE : 1 hour
ISSUE    : The eraser is linked with the squiggle and should have its own
			strategy
--------------------------------------------------------------------------


# OMITTED USER STORIES/BUGS BELOW   ###########################################


--------------------------------------------------------------------------
TYPE     : USER STORY 10 : chyzewsk
NAME     : Drawing selection changes based on user changes
OWNER    : Kenneth
PRIORITY : 6
ESTIMATE : 8 hours
AS A     : user
I WANT   : The buttons to dynamically change as I make changes to the paints settings.
SO THAT  : When I change the thickness of a line, the button changes as well.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 11 : 
NAME     : Allow user to change the background color
OWNER    : 
PRIORITY : 7
ESTIMATE : 6 hours
AS A     : user
I WANT   : To have an option that lets me change the background colour.
SO THAT  : If I have a perfect drawing that could look better with a different colour
			background, I can simply change it.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 15 : 
NAME     : Zoom in/ zoom out option
OWNER    : 
PRIORITY : 10
ESTIMATE : 8 hours
AS A     : user
I WANT   : A button that allows me to zoom into or out of my painting.
SO THAT  : When I want to view minor details or see the big picture, I can simply
			do so with a click of a button.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 16 : 
NAME     : Save file option
OWNER    : 
PRIORITY : 11
ESTIMATE : 8 hours
AS A     : user
I WANT   : A button that allows me save my current painting.
SO THAT  : When I am unable to continue working on my current painting at the moment,
			I can save my progress and continue later on.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : USER STORY 17 : 
NAME     : Open file option
OWNER    : 
PRIORITY : 11
ESTIMATE : 8 hours
AS A     : user
I WANT   : A button that allows me open previously made paintings in the program.
SO THAT  : When I want to continue working on or simply look at my past masterpieces,
			I can easily open the files within the application.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 3 : syedelha
NAME     : Architecture behind choosing selection mode is poor
OWNER    : Elhan
PRIORITY : 5
ESTIMATE : 4 hours
ISSUE    : Code is not modular and is difficult to expand. Need a better
           architecture behind selecting a drawing mode, and handling
           the drawing events. Consider some design patterns here.
           Refactor ShapeChooserPanel and PaintPanel to get rid of the
           'if' blocks in the PaintPanel mouse event code.
--------------------------------------------------------------------------
--------------------------------------------------------------------------
TYPE     : BUG 4 : fakhryah
NAME     : Architecture behind Model is poor
OWNER    : Ahmad
PRIORITY : 3
ESTIMATE : 8 hours
ISSUE    : Having a list of different types of drawable things in the
           model is cumbersome. In fact, it is currently incorrect, with
           Squiggle's not drawing properly. Need to re-architect the Model
           so that it is more flexible, and easier to work with.
           Consider some design patterns, or change of responsibility
           here.
--------------------------------------------------------------------------