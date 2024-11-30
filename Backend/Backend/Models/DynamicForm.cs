namespace Backend.Models
{
    public class DynamicForm
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Placeholder { get; set; }
        public string Hint { get; set; }
        public string DataType { get; set; }
        public string DefaultValue { get; set; }
        public bool Required { get; set; }
        public Location Location { get; set; }
        public Size Size { get; set; }
        public List<ValidValue> ValidValues { get; set; }
    }

    public class Location
    {
        public int x { get; set; }
        public int y { get; set; }
    }

    public class Size
    {
        public int Height { get; set; }
        public int Width { get; set; }

    }

    public class ValidValue
    {
        public string Value { get; set; }
        public string Description { get; set; }
        public string? Status { get; set; }
    }
}
