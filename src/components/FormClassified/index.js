import FormClassified from './FormClassified';
import { connect } from 'react-redux';
import { getClassified, getTags } from '../../store/selectors';
import { fetchDetailClassified, fetchTags } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    cl: getClassified(state),
    allTags: getTags(state)
  };
}

const mapDispatchToProps = {
  getClassified: fetchDetailClassified,
  getTags: fetchTags,
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const FormClassifiedConnected = connected(FormClassified);


export default FormClassifiedConnected;