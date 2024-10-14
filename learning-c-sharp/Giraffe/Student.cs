namespace Giraffe
{
    internal class Student
    {
        public string name;
        public string course;
        public double gpa;

        public Student(string aName, string aCourse, double aGpa)
        {
            name = aName;
            course = aCourse;
            gpa = aGpa;
        }

        public bool HasHonors()
        {
            if (gpa >= 3.5)
            {
                return true;
            }

            return false;
        }
    }
}
