import EditClassified from './EditClassified';
import { connect } from 'react-redux';
import { getClassified, getTags, getUi } from '../../store/selectors';
import { fetchDetailClassified, fetchTags, fetchEditClassified } from '../../store/actions';

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
  editClassified: fetchEditClassified
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const EditClassifiedConnected = connected(EditClassified);

export default EditClassifiedConnected;