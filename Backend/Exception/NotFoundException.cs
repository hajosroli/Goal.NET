namespace Backend.Exception;

public class NotFoundException : System.Exception
{
    public NotFoundException() : base()
    {
    }

    public NotFoundException(string message) : base(message)
    {
    }

    public NotFoundException(string message, System.Exception innerException) : base(message, innerException)
    {
    }
}