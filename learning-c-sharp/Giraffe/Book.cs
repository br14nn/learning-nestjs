namespace Giraffe
{
    internal class Book
    {
        public string Title;
        public string Author;
        public int pages;

        public Book(string title, string author, int pages)
        {
            this.Title = title;
            this.Author = author;
            this.pages = pages;
        }
    }
}
