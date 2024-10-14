using System;

namespace Giraffe
{
    internal class ItalianChef : Chef
    {
        public void MakeSpaghetti()
        {
            Console.WriteLine("The chef makes spaghetti");
        }

        public override void MakeSpecialDish()
        {
            Console.WriteLine("The chef makes Chicken Parm");
        }
    }
}
