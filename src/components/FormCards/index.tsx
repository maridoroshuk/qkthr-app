import React from 'react';

import { Card } from '@/components/Card';
import { CardContent } from '@/components/Card/CardContent';
import { CardImage } from '@/components/Card/CardImage';
import { CardsContainer } from '@/components/Card/CardsContainer';

import { IFormCardsProps } from './interface';

import './style.css';

export const FormCards = ({ formCardList }: IFormCardsProps) => {
  return (
    <CardsContainer>
      {formCardList.map(({ name, birthday, country, petList, gender, image }) => {
        return (
          <Card key={`${name}-${self.crypto.randomUUID()}`}>
            <CardImage image={image} alt={name} />
            <CardContent>
              <h3>{name}</h3>
              <h6 className="card-second-heading">{new Date(birthday).toLocaleDateString()}</h6>
              <p>{gender}</p>
              <p>{country}</p>
              {petList.length > 0 && (
                <>
                  <p>Favorite pets</p>
                  <ul className="pet-list">
                    {petList.map((pet) => {
                      return <li key={`${pet}-${self.crypto.randomUUID()}`}>{pet}</li>;
                    })}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        );
      })}
    </CardsContainer>
  );
};
