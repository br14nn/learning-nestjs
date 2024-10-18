using System.ComponentModel.DataAnnotations;

namespace GameStore.Dtos;

public record class CreateGameDto(
    [Required] [StringLength(50)] string name,
    [Required] [StringLength(20)] string genre,
    [Required] [Range(1, 100)] double price,
    DateOnly releaseDate
);
