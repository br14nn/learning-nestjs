using System;
using GameStore.Dtos;

namespace GameStore.GameEndpoints;

public static class GameEndpoints
{
    private static readonly List<GameDto> games =
    [
        new GameDto(1, "Tekken 8", "Fighting", 55.99, new DateOnly(2023, 9, 15)),
        new GameDto(2, "Monster Hunter World", "Adventure", 45.99, new DateOnly(2018, 5, 22)),
        new GameDto(3, "Elden Ring", "Souls-game", 59.99, new DateOnly(2020, 6, 11)),
    ];

    public static RouteGroupBuilder MapGamesEnpoints(this WebApplication app)
    {
        var group = app.MapGroup("games").WithParameterValidation();

        // GET /games
        group.MapGet("/", () => games);

        // GET /games/1
        group
            .MapGet(
                "/{id}",
                (int id) =>
                {
                    GameDto? game = games.Find(game => game.id == id);

                    return game is null ? Results.NotFound() : Results.Ok(game);
                }
            )
            .WithName("GetGame");

        // POST /games
        group.MapPost(
            "/",
            (CreateGameDto newGame) =>
            {
                GameDto game = new GameDto(
                    games.Count + 1,
                    newGame.name,
                    newGame.genre,
                    newGame.price,
                    newGame.releaseDate
                );
                games.Add(game);
                return Results.CreatedAtRoute("GetGame", new { id = game.id }, game);
            }
        );

        // PUT /games/id
        group.MapPut(
            "/{id}",
            (int id, UpdateGameDto updateGame) =>
            {
                var index = games.FindIndex(game => game.id == id);

                if (index == -1)
                {
                    return Results.NotFound();
                }

                games[index] = new GameDto(
                    id,
                    updateGame.name,
                    updateGame.genre,
                    updateGame.price,
                    updateGame.releaseDate
                );

                return Results.NoContent();
            }
        );

        // DELETE /games/id
        group.MapDelete(
            "/{id}",
            (int id) =>
            {
                games.RemoveAll(game => game.id == id);

                return Results.NoContent();
            }
        );

        return group;
    }
}
