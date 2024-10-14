namespace Giraffe
{
    internal class Song
    {
        private string Title;
        private string Author;
        private int Duration;
        public static int songCount = 0;

        public Song(string title, string author, int duration)
        {
            this.Title = title;
            this.Author = author;
            this.Duration = duration;
            songCount++;
        }
    }
}
