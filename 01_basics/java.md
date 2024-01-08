1. differnce betwwen checked and unchecjed exception
 -->
    check exception handled using try catch block
    uncheck exception handled is optionally

    exception is a superclass of check exception
    runtime exception is a superclass of unchecked exception

    checked exception is occur due to error scenarios
    unchecked exception is caused by poor programming

    ex- FileNotFoundException,SqlException
    ex- NullPointerExcepion,ArrayIndexBoundOfException,ClassCastException

2. java exception hierchy
--> 
                Throwable
Exception                       error
1. checked exception
2.runtime exception

3. finally block
  - it is always executed exception is handled or not
  - it is used for memory release and closing resources

  4. Yes we can write multiple processes in a single file

  5. setPriority method is used for to set the priority of thread
    - every thread has priority between 1-10 numbers

6. which are thread safe collections
--> stack,vector,hashtable,properties

7. purpose of wait,notify,notifyall method
--> wait - wait method is wait the current thread until other thread is not invoked by notify or notifyall method
notify - it wakes up single thread which is waiting
notifyall - it wakes up all threads which is waiting

8.constant in java
-->  static final int a=10;

9. synchronization
  - synchronization is a process of reliable communication between two threads

10. ways to create threads
  1. by extends thread class
  2. by implementing runnable interface

11. serializable-
  - it is marker interface which has no data member and method

12. serialization
   - it is a conversion of state of an object into byte stream

13. deserilization
  - it is a conversion of state of byte stream into object

interface is an abstract class that is used to group related method with empty bodies
