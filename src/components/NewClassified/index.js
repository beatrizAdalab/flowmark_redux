import NewClassified from './NewClassified';
import { connect } from 'react-redux';
import { getClassified, getTags, getUi } from '../../store/selectors';
import { fetchDetailClassified, fetchTags, fetchNewClassified } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    cl: getClassified(state),
    tags: getTags(state),
    ui: getUi(state)
  };
}

const mapDispatchToProps = {
  getClassified: fetchDetailClassified,
  getTags: fetchTags,
  newClassified: fetchNewClassified
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const NewClassifiedConnected = connected(NewClassified);

export default NewClassifiedConnected;
