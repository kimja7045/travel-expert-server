import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { Place } from './entities/place.entity';

@Injectable()
export class PlacesService {
  private places: Place[] = [
    {
      id: '1',
      name: '동방명주',
      image: 'https://picsum.photos/200/300',
      description: '동방명주 desccc',
      type: 'hotplace',
    },
    {
      id: '2',
      name: '유니버셜 스튜디오',
      image: 'https://picsum.photos/200/300',
      description: '유니버셜 스튜디오 desc',
      type: 'hotplace',
    },
  ];

  create(createPlaceInput: CreatePlaceInput) {
    const place = {
      id: createPlaceInput.id,
      name: createPlaceInput.name,
      image: createPlaceInput.image,
      description: createPlaceInput.description,
      type: createPlaceInput.type,
    };
    this.places.push(place);
    return place;
  }

  findAll() {
    return this.places;
  }

  findOne(id: string) {
    return this.places.find((place) => place.id === id);
  }

  update(id: string, updatePlaceInput: UpdatePlaceInput) {
    const place = this.places.find((place) => place.id === id);
    if (!place) {
      throw new NotFoundException('Place not found');
    }
    return place;
  }

  remove(id: string) {
    this.places = this.places.filter((place) => place.id !== id);
    return true;
  }
}
