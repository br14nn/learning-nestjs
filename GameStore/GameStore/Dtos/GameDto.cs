namespace GameStore.Dtos;

public record class GameDto(int id, string name, string genre, double price, DateOnly releaseDate);
