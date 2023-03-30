import React, { Component } from 'react';

import Link from '@/assets/icons/link.png';
import { ButtonWithIcon } from '@/components/ButtonWithIcon';
import { Card } from '@/components/Card';
import { CardActions } from '@/components/Card/CardActions';
import { CardContent } from '@/components/Card/CardContent';
import { CardImage } from '@/components/Card/CardImage';
import { CardsContainer } from '@/components/Card/CardsContainer';
import { cards } from '@/mock/cards';

import './style.css';

export class CardList extends Component {
  render() {
    return (
      <CardsContainer>
        {cards.map(({ id, image, title, author, body, link }) => {
          return (
            <Card key={id}>
              <CardImage image={image} alt={title} />
              <CardContent>
                <h3 data-testid={`${id}-card-title`}>{title}</h3>
                <h6 data-testid={`${id}-card-author`} className="card-second-heading">
                  {author}
                </h6>
                <p>{body}</p>
              </CardContent>
              <CardActions>
                <ButtonWithIcon icon={Link}>
                  <a className="icon-button-link" target="_blank" href={link} rel="noreferrer">
                    Open in Rijksmuseum
                  </a>
                </ButtonWithIcon>
              </CardActions>
            </Card>
          );
        })}
      </CardsContainer>
    );
  }
}
