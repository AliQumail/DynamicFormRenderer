namespace Backend.Models
{
    public class DynamicForm
    {
        public string name { get; set; }
        public string description { get; set; }
        public string placeholder { get; set; }
        public string hint { get; set; }
        public string dataType { get; set; }
        public string defaultValue { get; set; }
        public bool required { get; set; }
        public Location location { get; set; }
        public Size size { get; set; }
        public List<ValidValue> validValues { get; set; }
    }

    public class Location
    {
        public int x { get; set; }
        public int y { get; set; }
        public string? unit { get; set; }
    }

    public class Size
    {
        public int height { get; set; }
        public int width { get; set; }
        public string? unit { get; set; }

    }

    public class ValidValue
    {
        public string value { get; set; }
        public string description { get; set; }
        public string? status { get; set; }
    }
}
