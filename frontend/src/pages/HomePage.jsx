import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAppSelector, useAppDispatch } from "../hooks/useReduxHooks";
import InsProfile from "../components/InsProfile";
import InsClient from "../components/InsClient";
import InsSummary from "../components/InsSummary";
import InsSpinner from "../components/InsSpinner";
import BarChart from "../components/BarChart";
import OpportunitiesTable from "../components/OpportunitiesTable";
import { useEffect } from "react";
import { retrieveSummary1 } from "../store/summary1Slice";
import { retrieveSummary2 } from "../store/summary2Slice";
import { retrieveClient } from "../store/clientSlice";
import { retrieveProfile } from "../store/profileSlice";
import { retrieveOpportunities } from "../store/opportunitiesSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const profile = useAppSelector((store) => store.profile);

  const client = useAppSelector((store) => store.client);

  const summary1 = useAppSelector((store) => store.summary1);

  const summary2 = useAppSelector((store) => store.summary1);

  const opportunities = useAppSelector(
    (store) => store.opportunitiesStore.items
  );
  const yearComparisons = useAppSelector(
    (store) => store.opportunitiesStore.yearComparisons
  );

  useEffect(() => {
    dispatch(retrieveProfile());
    dispatch(retrieveClient());
    dispatch(retrieveSummary1());
    dispatch(retrieveSummary2());
    dispatch(retrieveOpportunities());
  }, [dispatch]);

  return (
    <Container
      style={{
        backgroundColor: "#f2f2f2",
        fontFamily: "Arial",
        padding: "24px",
      }}
    >
      <Row>
        <Col md={12} lg={3}>
          {profile.loading && <InsSpinner />}
          {!profile.loading && <InsProfile profile={profile} />}
        </Col>
        <Col>
          {client.loading && <InsSpinner />}
          {!client.loading && <InsClient client={client} />}
          <br></br>
          {summary1.loading && <InsSpinner />}
          {!summary1.loading && <InsSummary summary={summary1} />}
          <br></br>
          {summary2.loading && <InsSpinner />}
          {!summary2.loading && <InsSummary summary={summary2} />}
        </Col>
      </Row>
      <Row style={{ padding: "0 12px" }}>
        <BarChart data={yearComparisons} />
        <OpportunitiesTable opportunities={opportunities} />
      </Row>
    </Container>
  );
};

export default HomePage;

// todos 7/13/2022
// 1. Update InsSummary.js component
// 2. Add summary1 and summary2 mock data in HomePage
// 3. Add two InsSummary components to HomePage
// 4. Create data property in InsSummary component
// 5. Pass summary1 mock data to data property in first InsSummary component in HomePage
// 6. Pass summary2 mock data to data property in second InsSummary component in HomePage
// 7. Create single row with 2 columns.
// 8. First column is 25% and holds InsProfile
// 9. Second column has 3 roles and holds InsClient and InsSummary (x2)
// 10. Make responsive so on mobile Column 2 displays below Column 1
// 11. Extra Credit: Pass field titles within property to child components

// todos 7/14/2022
// 1. Create ProfileDataService
// 2. Create ClientDataService
// 3. Create Summary2DataService
// 4. Create profileSlice
// 5. Configure store to use profileSlice
// 6. Create clientSlice
// 7. Configure store to use clientSlice
// 8. Create summary2Slice
// 9. Configure store to use summary2Slice
// 10. Integrate profileSlice into HomePage
// 11. Integrate clientSlice into HomePage
// 12. Integrate summary2Slice into HomePage

// todos 7/15/2022
// 1. Create TextWithLabel component
// 2. Create property on TextWithLabel component to set text size
// 3. Create property on TextWithLabel component to assign paddingTop
// 4. Research vertically centering div within a div
// 5. Switch all label and text code to use TextWithLabel component
// 6. Add spinners for each component in HomePage
// 7. Extra Credit: Move InsSpinner into individual components
// 8. Extra Credit: Reseach adding db.json sample data into Django app (not manually)
