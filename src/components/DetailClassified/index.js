import DetailClassified from './DetailClassified';
import { connect } from 'react-redux';
import { getClassified, getTags, getUi } from '../../store/selectors';
import { fetchDetailClassified, fetchTags } from '../../store/actions';

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
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const DetailClassifiedConnected = connected(DetailClassified);

export default DetailClassifiedConnected;