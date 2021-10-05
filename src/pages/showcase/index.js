/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';

import clsx from 'clsx';
import styles from '../styles.module.css';
import games from '../../data/games';

const TITLE = 'Showcase';
const DESCRIPTION = 'See the awesome games created with the help of this template!';

function Index() {
    return (
        <Layout title={TITLE} description={DESCRIPTION}>
            <main className="container margin-vert--lg">
                <div className="text--center margin-bottom--xl">
                    <h1>{TITLE}</h1>
                    <p>{DESCRIPTION}</p>
                    <p>Is your game missing? <a
                        href="https://github.com/123ishaTest/igt-docs/issues"
                        target="_blank">
                        Let me know!
                    </a>
                    </p>
                </div>
                <div className="row">
                    {games.map((game) => (
                        <div key={game.title} className="col col--4 margin-bottom--lg">
                            <div className={clsx('card', styles.showcaseUser)}>
                                <div className="card__image">
                                    <Image img={game.preview} alt={game.title}/>
                                </div>
                                <div className="card__body">
                                    <div className="avatar">
                                        <div className="avatar__intro margin-left--none">
                                            <h4 className="avatar__name">{game.title}</h4>
                                            <small className="avatar__subtitle">
                                                {game.description}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                {(game.website || game.source) && (
                                    <div className="card__footer">
                                        <div className="button-group button-group--block">
                                            {game.website && (
                                                <a
                                                    className="button button--small button--secondary button--block"
                                                    href={game.website}
                                                    target="_blank"
                                                    rel="noreferrer noopener">
                                                    Play
                                                </a>
                                            )}
                                            {game.source && (
                                                <a
                                                    className="button button--small button--secondary button--block"
                                                    href={game.source}
                                                    target="_blank"
                                                    rel="noreferrer noopener">
                                                    Source
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </Layout>
    );
}

export default Index;
