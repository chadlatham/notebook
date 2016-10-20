#Graphs
##Define and describe the relationships depicted in a Graph
Graphs are a very common data structure in computer science. Graphs are common because it's very easy to describe a lot of real world problems in the language of Graph Theory. Maps, networks of friends, word problems, the game of chess, computers on the internet... all of these can be readily modeled as graphs. Because graphs are well studied, once a problem can be described in the language of graphs, we can apply powerful and well known algorithms to answer questions about the problem.

Very much like linked lists and trees, graphs are a collection of nodes. Nodes might represent any kind of information (people in a social network, computers on the internet, the position of pieces in a game of chess) and edges represent a connection between those two pieces of information (two people who are "friends", two computers connected by a network cable, moving a single chess piece to a new position).

Unlike linked lists and trees, there are no rules for how nodes can be connected. In linked lists, each node is connected to its "next" node (and "previous" node in a doubly linked list). In trees a node can only be connected to it's children and it's parent. Not only that, but in trees there must be a single path from the root node to any other node. In graphs any node can be both:

- connected to any node including itself.
- connected any number of nodes, from 0 to V (the number of vertices in the graph)

The lack of restrictions makes graphs a flexible data-structure; it's easy to model many real world systems and problems as graphs. This flexibility also introduces complications when writing algorithms to solve graph problems; the lack of restrictions means there are a lot of possibilities to explore.

A tree is a type of graph with rules dictating the connection between nodes. A Linked List is a type of graph with even more rules restricting the connections between nodes. This graph breaks all the rules for both lists and trees yet is a perfectly valid graph.

##Use Graph Theory vocabulary, specifically define the following terms:
- Node/vertex:


- Edge:


- Directed/Undirected:


- Weighted/Unweighted:


##Use Graph Theory Notation, specifically use the following to describe a graph:
- Ordered pairs:


- Set notation:


Chess:
Node: square on the board with a piece occupying it
edge: possible move
weighted: potential threats
cyclic
connected

##Breadth First Search
Breadth-First Search (BFS) is an extremely important algorithm to have in our toolbelt. On unweighted graphs we can use BFS to find the shortest path between any two vertices. Indeed we can use it to track the minimum distance every vertex is from a given source vertex.

At it's heart, BFS is a simple process:

Create an empty queue.
Enqueue the source vertex into the queue.
While the queue is not empty
Dequeue the top vertex from the queue. We are call that vertex the current vertex.
Test the current vertex to see if it's the goal vertex (and return if it is).
Enqueue all of the neighboring vertices from current vertex.
The process of dequeuing, testing, and enqueuing the current vertex's neighbors is called visiting a vertex.

process involves adding the children of a starting vertex to a queue, visiting them, and adding their children to the queue. until every vertex is visited.


##Depth First Search
DFS is a sister algorithm to BFS. The concept and implementation are both very similar.

Conceptually:

In BFS we explore nodes in the order that we find them.
In DFS we always explore the most recently found node.
Implementation:

In BFS the frontier is a queue.
In DFS the frontier is a stack.
This small change does introduce one crucial difference between the algorithms: breadth first search will always find the shortest path between two nodes on unweighted graphs. Depth first search is not guaranteed to find the shortest path between two nodes.

So our process now looks like this:

Create an empty stack.
Push the source vertex into the stack.
While the stack is not empty
Pop the top vertex from the stack. We are call that vertex the current vertex.
Test the current vertex to see if it's already been explored, if it has continue without performing steps 3-5.
Test the current vertex to see if it's the goal vertex (and return if it is).
Push all of the neighboring vertices from current vertex.
Add the current vertex to the explored set.


##Dijkstras Algorithm (also called Uniform Cost Search)
BFS is a lovely algorithm, it is sure to find the shortest path on unweighted graphs. When the graph has weighted edges though, the assumption that being the fewest number of edges away from the source node implies the shortest path becomes false, and BFS starts to break. Consider this graph:

Dijkstras

Look at the paths between node 3 and node 5. The path with the fewest number of edges is to go directly there, with a cost of 34. The shortest path though, is to go through node 2, for a cost of 14 + 4 = 18.
Edsger Dijkstra is a famous computer scientist. He invented an algorithm for finding the shortest path between two vertices on a weighted graph, and named it after himself (though some people call this algorithm Uniform Cost Search). Once again, the process of searching is very similar to BFS and DFS. Instead of processing nodes in the order that we find them(BFS), or always processing the node we most recently found(DFS), we process in order of lowest minimum distance from the source first. This means, when picking which node to visit next we have to account for the path we took to find that node in the first place as well as the edge weight to get there.

In implementation we use a data structure called a priority queue instead of a stack or a queue. This data structure is similar to a queue, but instead of processing nodes in a FIFO ordering, we have to provide a priority whenever we enqueue. When we dequeue our priority queue returns the entry with the best priority.

For unweighted graphs (or graphs where all weights are the same value) Dijkstra's algorithm and BFS have identical behavior. Here is the process for Dijkstra's Algorithm:

Create an empty priority queue.
Enqueue the source vertex into the queue with a priority of 0.
While the priority queue is not empty
Dequeue the top vertex from the queue. We are call that vertex the current vertex, and we also get that node's priority, we'll call that current priority.
Test the current vertex to see if it's already been explored, if it has continue without performing steps 3-5.
Test the current vertex to see if it's the goal vertex (and return if it is).
Enqueue all of the neighboring vertices from current vertex with a priority of current priority plus the weight of the edge to the neighbor.
Add the current vertex to the explored set.

##A* Search
A* is an extension of Dijkstra's algorithm, typically used in situations where exploring large portions of the graph is unreasonable to do; for example, in extremely large graphs. It's also used when we can make an educated guess about which direction to search for our destination node. Consider this animation of Dijkstra's Algorithm / BFS (because this is an unweighted graph, they behave identically):

BFS/Dijkstras

The green dot is our goal, notice how BFS just expands it's boundary slowly until it eventually reaches the goal. Look at how many locations were explored that clearly do not get us closer to the goal...
On large graphs, all of this wasted time exploring bad nodes can lead to a very slow search. A* addresses this issue by applying a heuristic. A heuristic is a guess, or an estimate, of how far any given node is from the destination node. We use this heuristic to change the cost value for our priority queue.

In the example above we are on a grid, lets assume we know the location on the grid of our destination, but know nothing about the walls. We can use this information to compute a commonly used heuristic called the Manhattan Distance. The Manhattan Distance between any two points on a grid is the sum of the number of rows and columns two nodes are off by. For example, if we have two grid locations (1, 3) and (5, 10) the Manhattan Distance between these nodes is 4 + 7 = 11 because we need to go four rows to get from 1 to 5, and 7 columns to get from 3 to 10. If Bob was at location (1, 3) and Tammy was at location (5, 10) on Manhattan Island, Bob might say, "I am 11 blocks away."

This animation is an example of A* search, using Manhattan Distance as a heuristic:

A*

Once again the green dot is the goal. Notice how much more whitespace there is when A* finishes, compared to Dijkstra's!
The change from Dijkstra's is minimal -- instead of cost as the priority in the priority queue, we use cost + heuristic. Here is the complete process for A*:

Create an empty priority queue.
Enqueue the source vertex into the queue with a priority of 0.
While the priority queue is not empty
Dequeue the top vertex from the queue. We are call that vertex the current vertex, and we also get that node's priority, we'll call that current priority.
Test the current vertex to see if it's already been explored, if it has continue without performing steps 3-5.
Test the current vertex to see if it's the goal vertex (and return if it is).
Loop over all of the neighboring vertices from current vertex:
Compute the heuristic value for the neighbor
Enqueue the neighbor with a priority of current priority plus the heuristic plus the weight of the edge to the neighbor.
Add the current vertex to the explored set.

joshua.g.s.ball@gmail.com

ETL Extract Transform Load

Auerlia???? Similar to Angular 2

.net Core - Build a web page with ASP.NET
