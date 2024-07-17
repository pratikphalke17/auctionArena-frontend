// src/pages/RulesPage.js
import React from "react";

const RulesPage = () => {
  return (
    <div id="rules" >
      <h1>Rules of the Game</h1>
      <ul>
        <li>
          Each team starts with a predefined budget. The budget is fixed and
          cannot be increased during the game.
        </li>
        <li>
          Teams bid on companies in a live auction format. Bids must be placed
          within the specified time limit for each round.
        </li>
        <li>
          Teams can see their own budget and companies bought, as well as
          those of other teams. This transparency adds a layer of strategy as
          teams can adjust their bids based on the actions of their
          competitors.
        </li>
        <li>
          The auctioneer manages the auction and ensures rules are followed.
          The auctioneer has the final say in case of any disputes or rule
          clarifications.
        </li>
        <li>
          Bids are binding. Once a bid is placed, it cannot be retracted.
        </li>
        <li>
          If a team overspends, they will be penalized. The penalty involves
          forfeiting a company from their portfolio to balance their budget.
        </li>
        <li>
          The game is divided into multiple rounds. In each round, a new set
          of companies is introduced for bidding.
        </li>
        <li>
          At the end of the game, the team with the most valuable portfolio of
          companies wins. The value is calculated based on predefined criteria
          that include company attributes and market trends.
        </li>
        <li>
          All decisions by the auctioneer are final. Teams must respect the
          auctioneer's authority and follow their instructions at all times.
        </li>
      </ul>
    </div>
  );
};

export default RulesPage;
