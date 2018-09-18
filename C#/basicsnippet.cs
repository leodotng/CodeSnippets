public static void Main()
{
    if (DateTime.Now.DayOfWeek == DayOfWeek.Monday)
    {
        Console.WriteLine("Another case of the Mondays!");
    }
    else 
    {
        Console.WriteLine("Its not monday!");
    }
}