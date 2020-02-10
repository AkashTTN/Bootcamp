# Intro to HTML/CSS
## Theory Answers (excludes 5, 11 and 12)

**1. How are inline and block elements different from each other ?**  
A block level element takes up all the space available in its parent element. Most of the HTML elements are block level. It begins on a new line. Eg: div  

An inline element takes up all the space specified by its tags. It can begin on a new line but it doesnt start on a new line. Eg: strong

**2. Explain the difference between visibility:hidden and display:none**    
display: none will hide the element for which its defined, i.e. it will not be rendered although we can interact with it in DOM.
visibility: hidden will render the element but hide it from sight. It will allocate space for that element on the page.

**3. Explain the clear and float properties.**    
float specifies how an element should float. With its usage we can creat a two column layout by placing the elements along the left or right side of its container.
Possible Values : Left, Right, None (The element must not float)

The element will float to left or right until it touches the edge of the container or another floated element.

Clear property is related to the float property in the sense that it will specify whether the element should move next to the floated elements or below them. It aplies to both floated and non floated elements.

If the element can fit in the horizontal space next to the floated elements, it will. If we have applied the clear property in the same direction as float, then it will move below.

Possible Values: 
None (The elements is not moved down to clear past floats)
Left
Right
Both (The element is moved down to clear past both left and right floated elements)

**4. Explain difference between absolute, relative, fixed and static.**  
Static: This is the default positioning. All elements start with static and it means that the element will flow normally into the page.

Relative: The element will position itself relative to itself. If we simply mention position:relative; then it will have no effect. But otherwise the element will position itself as mentioned relative to where it would have been normally. Ex: top: 20px The element will shift itself 20px down from where it would have been normally. It also provides us with the ability to specify z-index for that element. If we dont mention a z-index for a relatively positioned element then it will appear on top of statically positioned element for which z-index has no meaning anyways.

Absolute: It lets us position an element exactly where we want it to be. The positioning attributes top, left, right or bottom is w.r.t. the next parent element with relative or absolute positioning. This removes the element from normal flow of elements on the page.

Fixed: A fixed position element is positioned with respect to the viewport or the browser window which doesnt change with scrolling. Thus the element will stay right where it is irrespective of scrolling.

**6. Why do we use meta tags ?**  
Meta tags provide metadata about the HTML document. This is read by browsers, search engines and other web services. Meta elements are typically used to specify page description, keywords, author of the document, last modified etc. The importance of meta tags is that the search engines read them in order to compare if these keywords and the description are related to the visible content. They are also a part of SEO techniques.

**7. Explain box model.**    
Every element is represented as a rectangular box according to the standard CSS basic box model by the rendering engine of the browser. CSS determined the properties of these boxes.
Every box is composed of four parts (or areas) bounded by their respective edges : the content , padding , border , and margin.

The content area, bounded by the content edge, contains the "real" content of the element, such as text, an image, or a video player.

The padding area, extends the content area to include the element's padding.

The border area, bounded by the border edge, extends the padding area to include the element's borders.

The margin area, bounded by the margin edge, extends the border area to include an empty area used to separate the element from its neighbors. 

**8. What are the different types of CSS Selectors ?**  
CSS selectors define the elements to which a set of CSS rules apply.
**Basic selectors**
Universal selector  
Selects all elements. Optionally, it may be restricted to a specific namespace or to all namespaces.  
Example: * will match all the elements of the document.  
Type selector  
Selects all elements that have the given node name.  
Syntax: elementname  
Example: input will match any input element.  
Class selector  
Selects all elements that have the given class attribute.  
Syntax: .classname  
Example: .index will match any element that has a class of "index".  
ID selector  
Selects an element based on the value of its id attribute. There should be only one element with a given ID in a document.  
Syntax: #idname  
Example: #rollno will match the element that has the ID "rollno".  
Attribute selector  
Selects all elements that have the given attribute.  
Syntax: [attr] [attr=value]   

**Grouping selectors**  
Selector list  
The , is a grouping method, it selects all the matching nodes.  
Syntax: A, B  
Example: div, span will match both span and div elements.  

**Combinators**  
Descendant combinator  
The   (space) combinator selects nodes that are descendants of the first element.  
Syntax: A B  
Example: div span will match all span elements that are inside a div element.  
Child combinator  
The > combinator selects nodes that are direct children of the first element.  
Syntax: A > B  
Example: ul > li will match all li elements that are nested directly inside a ul element.  

**Pseudo**
Pseudo classes  
The : pseudo allow the selection of elements based on state information that is not contained in the document tree.  
Example: a:visited will match all a elements that have been visited by the user.  
Pseudo elements  
The :: pseudo represent entities that are not included in HTML.  
Example: p::first-line will match the first line of all p elements.  

**9. Define Doctype.**     
The (<!DOCTYPE html>) declaration is used to inform a website visitor's browser that the document being rendered is an HTML document. While not actually an HTML element itself, every HTML document should begin with a DOCTYPE declaration to be compliant with HTML standards. It lets the browser know how the document should be interpreted, by indicating what version or standard of HTML (or other markup language) is being used.

**10. Explain 5 HTML5 semantic tags.**  
header and hgroup
The header element is generally found at the top of a document, a section, or an article and usually contains the main heading and some navigation and search tools.
The hgroup element should be used where you want a main heading with one or more subheadings. header element can contain any content, but the hgroup element can only contain other headers

section and article
Both these elements are used for sectioning a content. The section and article elements are conceptually similar and interchangeable.

An article is intended to be independently distributable or reusable.
A section is a thematic grouping of content.

figure and figcaption
figure is for wrapping your image content around it, and figcaption is to caption your image.