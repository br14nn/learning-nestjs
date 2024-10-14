using System;

namespace Giraffe
{
    internal class Chef
    {
        public void MakeChicken()
        {
            Console.WriteLine("The chef makes chicken");
        }

        public void MakeCake()
        {
            Console.WriteLine("The chef makes cake");
        }

        public virtual void MakeSpecialDish()
        {
            Console.WriteLine("The chef makes Wagyu Steak");
        }
    }
}
