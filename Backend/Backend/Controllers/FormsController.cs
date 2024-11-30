using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.Json;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormsController : ControllerBase
    {
        private readonly string _formsDataFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "FormsData.json");

        [HttpGet]
        [Route("GetDynamicForms")]
        public IActionResult GetDynamicForms() 
        {
           
            if (!System.IO.File.Exists(_formsDataFilePath))
            {
                return NotFound("Data file not found.");
            }

            var jsonData = System.IO.File.ReadAllText(_formsDataFilePath);
            var results = JsonSerializer.Deserialize<List<DynamicForm>>(jsonData);

            return Ok(results);
        }
    }
}
