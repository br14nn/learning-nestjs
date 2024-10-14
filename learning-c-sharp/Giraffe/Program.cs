using System;
using System.Collections.Generic;

namespace Giraffe
{
    internal class Program
    {
        //METHODS
        //static void SayHi(string name, int age)
        //{
        //    Console.WriteLine($"Hello {name}, you are {age} years old.");
        //}

        //RETURN STATEMENTS
        //static int cube(int num) 
        //{
        //    return num * num * num;
        //}

        //IF STATEMENTS (cont'd)
        //static int GetMax(int num1, int num2, int num3)
        //{
        //    if(num1 >= num2 && num1 >= num3)
        //    {
        //        return num1;
        //    }

        //    if(num2 >= num1 && num2 >= num3)
        //    {
        //        return num2;
        //    }

        //    if(num3 >= num1 && num3 >= num2)
        //    {
        //        return num3;
        //    }

        //    return 0;
        //}

        //SWITCH STATEMENTS
        //static string GetDay(int dayNum)
        //{
        //    string dayName;

        //    switch (dayNum)
        //    {
        //        case 0:
        //            dayName = "Sunday";
        //            break;
        //        case 1:
        //            dayName = "Monday";
        //            break;
        //        case 2:
        //            dayName = "Tuesday";
        //            break;
        //        case 3:
        //            dayName = "Wednesday";
        //            break;
        //        case 4:
        //            dayName = "Thursday";
        //            break;
        //        case 5:
        //            dayName = "Friday";
        //            break;
        //        case 6:
        //            dayName = "Saturday";
        //            break;
        //        default:
        //            dayName = "Invalid day number";
        //            break;
        //    }

        //    return dayName;
        //}

        //BUILDING AN EXPONENT METHOD
        //static double GetPow(double baseNum, double exponent)
        //{
        //    double result = baseNum;

        //    for (int i = 0; i < exponent; i++)
        //    {
        //        result = result * baseNum;
        //    }

        //    return result;
        //}

        static void Main(string[] args)
        {
            //EXTRA: LISTS
            List<Student> classroom = new List<Student>();

            for (int i = 0; i < 5; i++)
            {
                classroom.Add(new Student("Brian" + i, "IT", 3.55));
                classroom[i].ShowStudentDetails();
            }

            Console.ReadLine();

            //EXTRA: ARRAY OF OBJECTS
            //Student[] classroom = { new Student("Brian", "IT", 4.0), new Student("Delmain", "CS", 3.76) };

            //Console.WriteLine(classroom[0].name);

            //Console.ReadLine(); 

            //INHERITANCE
            //Chef chef = new Chef();
            //chef.MakeChicken();

            //ItalianChef italianChef = new ItalianChef();
            //italianChef.MakeChicken();
            //italianChef.MakeSpaghetti();

            //Console.ReadLine();

            //STATIC METHODS & CLASSES
            //UsefulTools.SayHi("Brian");

            //Console.ReadLine();

            //STATIC CLASS ATTRIBUTES
            //Song pleasePleasePlease = new Song("Please Please Please", "Sabrina Carpenter", 180);
            //Song holiday = new Song("Holiday", "Lil Nas X", 150);

            //Console.WriteLine(Song.songCount);

            //Console.ReadLine();

            //GETTERS & SETTERS
            //Movie movie1 = new Movie("The Avengers", "Joss Wedon", "PG-13");
            //Movie movie2 = new Movie("One Piece", "Oda", "PG-13");

            //movie1.Rating = "DOG";
            //movie2.Rating = "G";

            //Console.WriteLine(movie1.Rating);
            //Console.WriteLine(movie2.Rating);

            //Console.ReadLine();

            //OBJECT METHODS
            //Student student1 = new Student("George", "Computer Science", 3.0);
            //Student student2 = new Student("Brian", "Information Technology", 3.5);

            //Console.WriteLine($"Student 1 has honors: {student1.HasHonors()}");
            //Console.WriteLine($"Student 2 has honors: {student2.HasHonors()}");

            //Console.ReadLine();

            //CONSTRUCTORS
            //Book book1 = new Book("Spongebob", "Jowell Garfield", 55);

            //Console.WriteLine(book1.Title);
            //Console.WriteLine(book1.Author);
            //Console.WriteLine(book1.pages);

            //Console.ReadLine();

            //CLASSES AND OBJECTS
            //Book book = new Book();
            //book.Title = "Henry The Goat";
            //book.Author = "Henry Cowell";
            //book.pages = 55;

            //Console.WriteLine(book);

            //Console.ReadLine();

            //EXCEPTION HANDLING
            //try
            //{
            //    Console.Write("Enter a number: ");
            //    int num1 = Convert.ToInt32(Console.ReadLine());

            //    Console.Write("Enter another number: ");
            //    int num2 = Convert.ToInt32(Console.ReadLine());

            //    Console.WriteLine(num1 / num2);


            //}
            //catch (Exception e)
            //{
            //    Console.WriteLine(e);
            //}

            //Console.ReadLine();

            //2D ARRAYS
            //int[,] numberGrid = { { 1, 2, 3 }, { 4, 5, 6 } };

            //Console.WriteLine(numberGrid[0, 2]);

            //Console.ReadLine();

            ////BUILDING AN EXPONENT METHOD
            //Console.WriteLine(GetPow(2, 4));

            //Console.ReadLine();

            //FOR LOOP
            //int[] numbers = { 5, 4, 3, 7, 9, 7, 6, 8 };

            //for (int i = 0; i < numbers.Length; i++)
            //{
            //    Console.WriteLine(numbers[i]);
            //}

            //Console.ReadLine();

            //GUESSING GAME
            //string secretWord = "giraffe";
            //string guess = "";
            //int guessCount = 0;
            //int guessLimit = 3;
            //bool outOfGuesses = false;

            //while (guess != secretWord && !outOfGuesses)
            //{
            //    if (guessCount < guessLimit)
            //    {
            //        Console.Write("Enter guess: ");
            //        guess = Console.ReadLine();
            //        guessCount++;
            //    }
            //    else
            //    {
            //        outOfGuesses = true;
            //    }

            //}

            //if (outOfGuesses)
            //{
            //    Console.WriteLine("You Lose!");
            //}
            //else
            //{
            //    Console.WriteLine("You Win!");
            //}

            //Console.ReadLine();

            //WHILE LOOPS
            //int index = 1;

            //while (index <= 5)
            //{
            //    if (index == 3)
            //    {
            //        Console.WriteLine("Hello World");
            //    }
            //    else
            //    {
            //        Console.WriteLine(index);
            //    }

            //    index++;
            //}

            //Console.ReadLine();

            //SWITCH STATEMENTS
            //Console.WriteLine(GetDay(5));
            //Console.WriteLine(GetDay(3));

            //BETTER CALCULATOR
            //Console.Write("Enter a number: ");
            //double num1 = Convert.ToDouble(Console.ReadLine());

            //Console.Write("Enter operator: ");
            //string op = Console.ReadLine();

            //Console.Write("Enter another number: ");
            //double num2 = Convert.ToDouble(Console.ReadLine());

            //if (op == "+")
            //{
            //    Console.WriteLine(num1 + num2);
            //}
            //else if (op == "-")
            //{
            //    Console.WriteLine(num1 - num2);
            //}
            //else if (op == "*")
            //{
            //    Console.WriteLine(num1 * num2);
            //}
            //else if (op == "/")
            //{
            //    Console.WriteLine(num1 / num2);
            //}
            //else
            //{
            //    Console.WriteLine("Invalid operator");
            //}

            //Console.ReadLine();

            //IF STATEMENTS (cont'd)
            //Console.WriteLine(GetMax(55, 6, 40));

            //Console.ReadLine();

            //IF STATEMENTS
            //bool isMale = false;
            //bool isTall = false;

            //if (isMale && isTall)
            //{
            //    Console.WriteLine("You are a tall male");
            //}
            //else if (isMale && !isTall)
            //{
            //    Console.WriteLine("You are a short male");
            //}
            //else if(!isMale && isTall)
            //{
            //    Console.WriteLine("You are not a male but you are tall");
            //}
            //else
            //{
            //    Console.WriteLine("You are not male and tall");
            //}

            //Console.ReadLine();

            //RETURN STATEMENTS
            //Console.WriteLine(cube(2));
            //Console.WriteLine(cube(5));

            //int myNum = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine($"the cube of {myNum} is: {cube(myNum)}");

            //Console.ReadLine();

            //METHODS
            //SayHi("Brian", 23);
            //SayHi("Hina", 25);
            //SayHi("Jeremy", 30);

            //Console.ReadLine();

            //ARRAYS
            //int[] luckyNumbers = { 5, 12, 15, 27, 30, 55 };
            //string[] friends = new string[5];

            //friends[0] = "Finn";
            //friends[1] = "Jake";

            //Console.WriteLine(luckyNumbers[2]);
            //Console.WriteLine(friends[1]);

            //Console.ReadLine();

            //BUILDING A MAD LIB
            //string color, pluralNoun, celebrity;

            //Console.Write("Enter a color: ");
            //color = Console.ReadLine();

            //Console.Write("Enter a plural noun: ");
            //pluralNoun = Console.ReadLine();

            //Console.Write("Enter a celebrity: ");
            //celebrity = Console.ReadLine(); 

            //Console.WriteLine($"Roses are {color}");
            //Console.WriteLine($"{pluralNoun} are blue");
            //Console.WriteLine($"I love {celebrity}");

            //Console.ReadLine();

            //BUILDING A CALCULATOR
            //Console.Write("Enter a number: ");
            //double num1 = Convert.ToDouble(Console.ReadLine());

            //Console.Write("Enter another number: ");
            //double num2 = Convert.ToDouble((Console.ReadLine()));

            //double sum = num1 + num2;
            //Console.WriteLine("sum is: " + sum);

            //Console.ReadLine();

            //GETTING USER INPUT
            //string name;
            //string age;

            //Console.Write("What is your name? ");
            //name = Console.ReadLine();

            //Console.Write("Your age: ");
            //age = Console.ReadLine();

            //Console.WriteLine("Hello " + name + ", you are " + age + " years old.");

            //Console.ReadLine();

            //NUMBERS
            //Console.WriteLine(Math.Round(4.6));
            //Console.WriteLine(Math.Sqrt(4));
            //Console.WriteLine(Math.Pow(3.4, 2));
            //Console.WriteLine(Math.Abs(-40));

            //int num = 6;
            //num++;
            //Console.WriteLine(num);

            //Console.ReadLine();

            //STRINGS
            //string phrase = "Giraffe Academy";

            //Console.WriteLine(phrase.Substring(8));
            //Console.WriteLine(phrase.IndexOf('f'));
            //Console.WriteLine(phrase.Contains("Academy"));
            //Console.WriteLine(phrase.ToLower());
            //Console.WriteLine(phrase.ToUpper());
            //Console.WriteLine(phrase.Length);
            //Console.WriteLine(phrase + "is cool!");

            //Console.ReadLine();

            //DATATYPES
            //string phase = "Giraffe Academy";
            //char grade = 'C';
            //int age = 30;
            //double gpa = 3.3;
            //bool isMale = true;

            //Console.WriteLine(phase);

            //Console.ReadLine();

            //VARIABLES
            //string characterName = "Dodong";
            //int characterAge = 25;

            //Console.WriteLine("There once was a man named " + characterName);
            //Console.WriteLine("He was " + characterAge + " years old");
            //Console.WriteLine("He really liked the name " + characterName);
            //Console.WriteLine("But didn't like being" + characterAge);

            //Console.ReadLine();
        }


    }
}
