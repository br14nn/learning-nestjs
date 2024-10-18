using GameStore.Dtos;
using GameStore.GameEndpoints;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGamesEnpoints();

app.Run();
