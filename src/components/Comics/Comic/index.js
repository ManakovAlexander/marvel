// @flow
import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import { Carousel } from '../Carousel'

export const Comic = ({ comic }) => (
  <Card style={{flex: 0}}>
    <CardItem>
      <Left>
        <Thumbnail source={{uri: thumbnailUri(comic.thumbnail)}} />
        <Body>
          <Text>{ comic.title }</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Carousel images={comic.images} />
        <Text>
          { comic.description }
        </Text>
      </Body>
    </CardItem>
  </Card>
)

const thumbnailUri = (thumbnail) => thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : undefined