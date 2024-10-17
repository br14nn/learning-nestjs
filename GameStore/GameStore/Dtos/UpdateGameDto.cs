namespace GameStore.Dtos;

public record class UpdateGameDto(string name, string genre, double price, DateOnly releaseDate);
