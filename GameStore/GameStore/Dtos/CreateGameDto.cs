namespace GameStore.Dtos;

public record class CreateGameDto(string name, string genre, double price, DateOnly releaseDate);
